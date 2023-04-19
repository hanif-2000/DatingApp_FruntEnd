import { PermissionsAndroid, Platform, SafeAreaView, } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './src/navigation/AuthStack'
import MainStack from './src/navigation/MainStack';
// import { fcmService } from './src/notification/fcmservice';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const App = () => {

  const toastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'green' }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 15,
          fontWeight: '400',
        }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    tomatoToast: ({ text1, props }) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'red' }}>
        <Text>{text1}</Text>
      </View>
    ),
  };

  useEffect(() => {
    // handler()
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
    // <SafeAreaView style={{flex: 1, flexGrow: 1}}>
      <NavigationContainer>
        <AuthStack />
        <Toast config={toastConfig} />
      </NavigationContainer>
    // </SafeAreaView>
  );
};

export default App;
