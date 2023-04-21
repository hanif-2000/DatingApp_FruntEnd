import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from '../common/theme';
import {Icon} from 'react-native-elements';

const IconButton = ({onPress, name, backgroundColor, color, type}) => (
  <TouchableOpacity
    style={[styles.singleButton, {backgroundColor}]}
    onPress={onPress}
    activeOpacity={0.85}>
    <Icon type={type} name={name} size={20} color={color} />
  </TouchableOpacity>
);

export default IconButton;

const styles = StyleSheet.create({
  singleButton: {
    backgroundColor: 'transparent',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 6,
    height: 50,
    width: 50,
  },
});
