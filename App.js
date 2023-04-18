import { PermissionsAndroid, Platform, SafeAreaView, } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack'
import MainStack from './src/navigation/MainStack';
import { fcmService } from './src/notification/fcmservice';

const App = () => {

  useEffect(() => {
    handler()
  }, []);

  const handler = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,)
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the Notifications")
        } else {
          console.log("Notifications permission denied")
        }
      } catch (err) {
        console.warn(err)
      }
    }

    fcmService.register()
    let token = fcmService.getFcmToken()
    setFcmToken(token)
  }

  return (
    <SafeAreaView style={{flex: 1, flexGrow: 1}}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
