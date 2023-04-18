import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

import {COLORS, Font, HP_WP, SIZE} from './theme';

const GlobalButton = ({title, onPress, Style, textStyle,icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.Container, Style]}>
        {icon &&(<Icon name='facebook' type='fontisto' size={12} color={COLORS.blue}/>)}
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
  Container: {
    backgroundColor:'#AA3FEC',
    borderRadius: 30,
    alignItems: 'center',
    height: HP_WP.hp(5.5),
    width: HP_WP.wp(75),
    alignSelf:'center',
    flexDirection:'row',
    paddingHorizontal:HP_WP.wp(10)
  },
  title: {
    color: COLORS.white,
    fontSize: SIZE.NL,
    fontFamily: Font.semiBold,
    textAlign:'center',
    flex:1
  },
});