import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wellcome from '../screen/Wellcome';
import LoginWithPhone from '../screen/LoginWithPhone';
import LoginWithFacebook from '../screen/LoginWithFacebook';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Wellcome" component={Wellcome} />
        <Stack.Screen name="LoginWithFacebook" component={LoginWithFacebook} />
      </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
