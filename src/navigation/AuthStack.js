import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wellcome from '../screen/Wellcome';
import LoginWithPhone from '../screen/LoginWithPhone';
import LoginWithFacebook from '../screen/LoginWithFacebook';
import OtpScreen from '../screen/OtpScreen';
import Edit from '../screen/Edit';
import PlanSetting from '../screen/PlanSetting';
import MainStack from './MainStack';
import ChattingScreen from '../screen/ChattingScreen';
import FitMatch from '../screen/FitMatch';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='FitMatch'
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Wellcome" component={Wellcome} />
      <Stack.Screen name="LoginWithPhone" component={LoginWithPhone} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="LoginWithFacebook" component={LoginWithFacebook} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="PlanSetting" component={PlanSetting} />
      <Stack.Screen name="MainStack" component={MainStack} />
      <Stack.Screen name="ChattingScreen" component={ChattingScreen} />
      <Stack.Screen name="FitMatch" component={FitMatch} />
      

    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
