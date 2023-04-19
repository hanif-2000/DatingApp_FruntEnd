import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wellcome from '../screen/Wellcome';
import LoginWithPhone from '../screen/LoginWithPhone';
import LoginWithFacebook from '../screen/LoginWithFacebook';
import Otp from '../screen/Otp';
import Edit from '../screen/Edit';
import PlanSetting from '../screen/PlanSetting';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PlanSetting"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Wellcome" component={Wellcome} />
      <Stack.Screen name="LoginWithPhone" component={LoginWithPhone} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="LoginWithFacebook" component={LoginWithFacebook} />
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="PlanSetting" component={PlanSetting} />
      <Stack.Screen name="MainStack" component={MainStack} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
