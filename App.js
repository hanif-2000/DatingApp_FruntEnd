import { PermissionsAndroid, Platform, SafeAreaView, } from 'react-native'
import React from 'react'
import AuthStack from './src/navigation/AuthStack'
import { fcmService } from 'notification/fcmservice';

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
    <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
      <AuthStack />
    </SafeAreaView>
  )
}

export default App

