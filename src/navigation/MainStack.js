import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

import {COLORS, HP_WP} from '../comman/theme';
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';

const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.main,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
         <Icon name="home" size={30} type='foundation' color={focused ? COLORS.purple : COLORS.COLORS} />
          ),
        })}
      />
       <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
         <Icon name="home" size={30} type='foundation' color={focused ? COLORS.purple : COLORS.COLORS} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default MainStack;
const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.white,
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
    width: HP_WP.wp(100),
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
});
