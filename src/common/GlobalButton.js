import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

import {COLORS, Font, HP_WP, SIZE} from './theme';

const GlobalButton = ({title, onPress, Style, textStyle, icon = false}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.Container, Style]}>
      {icon && (
        <Icon name="facebook" type="fontisto" size={15} color={COLORS.blue} />
      )}
      <Text style={[styles.title, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: COLORS.purple,
    borderRadius: 30,
    height: HP_WP.hp(5.5),
    width: HP_WP.wp(75),
    alignSelf: 'center',
    paddingHorizontal: HP_WP.wp(8),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    fontSize: SIZE.N,
    fontFamily: Font.semiBold,
    flex: 1,
    textAlign: 'center',
    lineHeight: 20,
  },
});
