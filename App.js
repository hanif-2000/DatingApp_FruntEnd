import { SafeAreaView, } from 'react-native'
import React from 'react'
import AuthStack from './src/navigation/AuthStack'

const App = () => {
  return (
  <SafeAreaView style={{flex:1,flexGrow:1}}>
     <AuthStack/>
  </SafeAreaView>
  )
}

export default App

