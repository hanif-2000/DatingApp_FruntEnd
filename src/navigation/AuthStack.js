import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Wellcome from '../screen/Wellcome';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Wellcome" component={Wellcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
