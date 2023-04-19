import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {COLORS, HP_WP} from '../comman/theme';
import HomeScreen from '../screen/HomeScreen';
import ChatScreen from '../screen/ChatScreen';
import Profile from '../screen/Profile';
import LikeScreen from '../screen/LikeScreen';
import Match from '../screen/Match';

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
        name="HomeScreen"
        component={HomeScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              size={30}
              type="foundation"
              color={focused ? COLORS.purple : COLORS.COLORS}
            />
          ),
        })}
      />
      <Tab.Screen
        name="LikeScreen"
        // component={LikeScreen}
        component={Match}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <AntDesign
              name="hearto"
              size={30}
              color={focused ? COLORS.purple : COLORS.COLORS}
            />
          ),
        })}
      />
      <Tab.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={30}
              color={focused ? COLORS.purple : COLORS.COLORS}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={() => ({
          tabBarIcon: ({focused}) => (
            <FontAwesome
              name="user"
              size={30}
              color={focused ? COLORS.purple : COLORS.COLORS}
            />
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
    height: 65,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 3,
    width: HP_WP.wp(100),
    // position: 'absolute',
    // bottom: 0,
    alignSelf: 'center',
  },
});
