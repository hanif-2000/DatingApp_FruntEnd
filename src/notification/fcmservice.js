import messaging from '@react-native-firebase/messaging';
import {Platform, Alert} from 'react-native';
import {localNotificationService} from './localNotification';
import {notificationOpen} from './notificationAction';

var fcmToken = '';

class FCMService {
  register = () => {
    this.checkPermission();
    this.createNotificationListeners();
    localNotificationService.configure();

    if (Platform.OS === 'ios') {
      this.registerAppWithFCM();
    }
  };

  registerAppWithFCM = async () => {
    if (Platform.OS === 'ios') {
      // await messaging().registerDeviceForRemoteMessages();
      await messaging().setAutoInitEnabled(true);
    }
  };

  checkPermission = async () => {
    let authStatus = await messaging().hasPermission();
    if (authStatus !== messaging.AuthorizationStatus.AUTHORIZED) {
      authStatus = await messaging().requestPermission({
        sound: true,
        badge: true,
        alert: true,
        carPlay: true,
        announcement: true,
        criticalAlert: true,
      });
    } else {
      this.setFcmToken();
    }
  };

  setFcmToken = () => {
    return new Promise(res => {
      messaging()
        .getToken()
        .then(token => {
          if (token) {
            console.warn('[FCM TOKEN] => ', token);
            res(token);
            fcmToken = token;
          } else {
            console.warn('[FCMService] User Does not have a device token');
          }
        })
        .catch(error => {
          Alert.alert('Please check your network connection.');
          console.warn('[FCMService] getToken rejected', error);
        });
    });
  };

  getFcmToken = () => {
    return fcmToken;
  };

  requestPermission = () => {
    messaging()
      .requestPermission()
      .then(() => {
        this.setFcmToken();
      })
      .catch(error => {
        console.warn('[FCMService] Request Permission rejected', error);
      });
  };

  deleteToken = () => {
    messaging()
      .deleteToken()
      .catch(error => {
        console.warn('[FCMService] Delete Token error', error);
      });
  };

  createNotificationListeners = () => {
    //when the application is running but in background
    messaging().onNotificationOpenedApp(remoteMessage => {
      if (remoteMessage) {
        notificationOpen(remoteMessage);
      }
    });

    //when the application is opened from a quit state.
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          notificationOpen(remoteMessage);
        }
      });

    //forgrounnd state messages
    messaging().onMessage(async remoteMessage => {
      if (remoteMessage) {
        localNotificationService.showlocalNotification(remoteMessage);
      }
    });

    // this.messageListener = messaging().onMessage(async (remoteMessage) => {
    //     if (remoteMessage) {
    //         localNotificationService.showlocalNotification(remoteMessage)
    //     }
    // });

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      if (remoteMessage) {
        // this.onNotification(remoteMessage,false);
      }
    });

    //Triggerd When have new token
    messaging().onTokenRefresh(fcmToken => {
      console.warn('[FCMService] new token refresh', fcmToken);
    });
  };

  unRegister = () => {
    if (this.messageListener) {
      this.messageListener();
    }
  };
  messageListener;
}

export const fcmService = new FCMService();
