import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screen/SplashScreen';
import LoginWithFacebook from '../screen/LoginWithFacebook';
import ProfileEdit from '../screen/ProfileEdit';
import PlanSetting from '../screen/PlanSetting';
import MainStack from './MainStack';
import ChattingScreen from '../screen/ChattingScreen';
import FitMatch from '../screen/FitMatch';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginWithFacebook" component={LoginWithFacebook} />
      <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
      <Stack.Screen name="PlanSetting" component={PlanSetting} />
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="ChattingScreen" component={ChattingScreen} />
      <Stack.Screen name="FitMatch" component={FitMatch} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
