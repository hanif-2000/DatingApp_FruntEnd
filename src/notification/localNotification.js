import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';
import {notificationOpen} from './notificationAction';

class LocalNotificationService {
  configure = () => {
    this.createChannel();
    this.configureNotification();
  };

  createChannel = () => {
    let config = {
      channelId: 'channel-id', // (required)
      channelName: 'My channel', // (required)
      channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
      playSound: true, // (optional) default: true
      allowWhileIdle: true,
      // soundName: (Platform.OS=='ios')?"rushs.wav":"rushs", // (optional) See `soundName` parameter of `localNotification` function
      importance: 4, // (optional) default: 4. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      alert: true,
    };

    PushNotification.createChannel(config, (created: any) => {});
  };

  configureNotification = () => {
    let config = {
      onRegister: function (token: any) {},
      onNotification: function (notification: any) {
        if (notification.userInteraction) {
          notificationOpen(notification);
        }
      },
      // Android only
      senderID: '568080477856',
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: true,
    };

    PushNotification.configure(config);
  };

  unRegister = () => {
    PushNotification.unregister();
  };

  showlocalNotification = ({notification, data}: any) => {
    let config = {
      title: notification?.title,
      message: notification?.message,
      userInfo: data,
      playSound: true,
      // soundName:(Platform.OS=='ios')?"rushs.wav":'rushs'
    };

    if (Platform.OS == 'android') {
      config.channelId = 'channel-id';
      config.data = data;
      config.message = notification?.body;
    }

    PushNotification.localNotification(config);
  };

  cancelAllLocalNotifications = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  clearNotificationBadge = () => {
    if (Platform.OS == 'ios') {
      PushNotificationIOS.getApplicationIconBadgeNumber((num: any) => {
        // get current number
        if (num >= 1) {
          PushNotificationIOS.setApplicationIconBadgeNumber(0); //set number to 0
        }
      });
    }
  };

  removeAllDeliveredNotificationByID = (notificationId: any) => {
    PushNotification.cancelLocalNotifications({id: `${notificationId}`});
  };
}

export const localNotificationService = new LocalNotificationService();
