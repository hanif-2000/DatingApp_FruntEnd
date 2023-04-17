import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {COLORS, Font, HP_WP, SIZE} from './theme';

const GlobalButton = ({title, onPress, Style, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.Container, Style]}>
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.purple,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    height: HP_WP.hp(6),
    width: HP_WP.wp(90),
  },
  title: {
    color: COLORS.white,
    fontSize: SIZE.NL,
    fontFamily: Font.semiBold,
  },
});