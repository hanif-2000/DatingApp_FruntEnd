import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {useNetInfo} from '@react-native-community/netinfo';

import AuthStack from './src/navigation/AuthStack';
import MainStack from './src/navigation/MainStack';
import {Font} from './src/common/theme';
import ConectionModal from './src/component/ConectionModal';

Geocoder.init(
  'AIzaSyDEZIj905xo7XomPhQLZxG71RvL5zNEuYM', //  {language: 'en'}
);

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={styles.baseToastContainer}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={styles.baseToastText}
    />
  ),
  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={styles.baseToastText}
    />
  ),
  // tomatoToast: ({text1, props}) => (
  //   <View style={{height: 60, width: '100%', backgroundColor: 'red'}}>
  //     <Text>{text1}</Text>
  //   </View>
  // ),
};

const App = () => {
  const netInfo = useNetInfo();
  const [isVisible, setVisible] = React.useState(false);
  const [forceLocation, setForceLocation] = React.useState(true);
  const [highAccuracy, setHighAccuracy] = React.useState(true);
  const [locationDialog, setLocationDialog] = React.useState(true);
  const [useLocationManager, setUseLocationManager] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      if (!netInfo.isConnected) {
        setVisible(true);
      }
    }, 1000);
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      await Check();
    }
    fetchData();
  }, []);

  React.useEffect(() => {
    async function fetchData() {
      if (await hasLocationPermission()) {
        await getLocation();
      }
    }
    fetchData();
  }, []);
  const Check = async () => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization('whenInUse');
      Geolocation.setRNConfiguration({
        skipPermissionRequests: false,
        authorizationLevel: 'whenInUse',
      });
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
    }
  };
  const hasPermissionIOS = async () => {
    const openSetting = () => {
      Linking.openSettings().catch(() => {
        Alert.alert('Unable to open settings');
      });
    };
    const status = await Geolocation.requestAuthorization('whenInUse');

    if (status === 'granted') {
      return true;
    }

    if (status === 'denied') {
      Alert.alert('Location permission denied');
    }

    if (status === 'disabled') {
      Alert.alert(
        `Turn on Location Services to allow "${appConfig.displayName}" to determine your location.`,
        '',
        [
          {text: 'Go to Settings', onPress: openSetting},
          {text: "Don't Use Location", onPress: () => {}},
        ],
      );
    }
    return false;
  };
  const hasLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      const hasPermission = await hasPermissionIOS();
      return hasPermission;
    }
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }
    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (hasPermission) {
      return true;
    }
    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      Toast.show({
        position: 'top',
        type: 'success',
        text1: 'Location permission denied by user.',
      });
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      Toast.show({
        position: 'top',
        type: 'success',
        text1: 'Location permission revoked by user.',
      });
    }

    return false;
  };

  const getLocation = async () => {
    const hasPermission = await hasLocationPermission();
    if (!hasPermission) {
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        // setLat(position.coords.latitude);
        // setLong(position.coords.longitude);
      },
      error => {
        Alert.alert(`Code ${error.code}`, error.message);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        enableHighAccuracy: highAccuracy,
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
        forceRequestLocation: forceLocation,
        forceLocationManager: useLocationManager,
        showLocationDialog: locationDialog,
      },
    );
  };

  useEffect(() => {
    // handler()
  }, []);

  const handler = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('You can use the Notifications');
        } else {
          console.log('Notifications permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }

    fcmService.register();
    let token = fcmService.getFcmToken();
    setFcmToken(token);
  };

  return (
    <NavigationContainer>
      {!netInfo.isConnected && <ConectionModal isVisible={isVisible} />}
      <AuthStack />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({
  baseToastText: {
    fontSize: 15,
    fontFamily: Font.medium,
  },
  baseToastContainer: {
    borderLeftColor: 'green',
  },
});
