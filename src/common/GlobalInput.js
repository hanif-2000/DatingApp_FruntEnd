import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS, Font, HP_WP, SIZE} from './theme';
import {Icon} from 'react-native-elements';

const GlobalInput = ({
  onChange,
  value,
  onBlur,
  keyboardType,
  placeholder,
  icon,
  inputStyle,
  secureTextEntry,
  onPress,
  maxLength,
  errors,
  touched,
  countryCode,
  code,
  openCode,
  editable,
  numberInput,
  textInputStyle,
  inputName,
  label,
  iconName,
  iconType,
  countryPikerStyle,
  text,
  tuchText,
}) => {
  return (
    <>
      <View
        style={[
          styles.container,
          inputStyle,
          {
            borderColor: errors && touched ? COLORS.orange : COLORS.gray,
            borderWidth: numberInput ? 0 : 0.8,
          },
        ]}>
        {countryCode && (
          <TouchableOpacity
            onPress={openCode}
            style={[styles.countryPicker, countryPikerStyle]}>
            <Text style={styles.codeTxt}>{code}</Text>
          </TouchableOpacity>
        )}
        {inputName && <Text style={[styles.inputNameText]}>{label}</Text>}
        <TextInput
          style={[
            styles.input,
            {textAlign: inputName ? 'right' : 'left'},
            textInputStyle,
          ]}
          onChangeText={onChange}
          value={value}
          keyboardType={keyboardType}
          placeholder={placeholder}
          placeholderTextColor={COLORS.lightGray}
          secureTextEntry={secureTextEntry}
          maxLength={maxLength}
          onBlur={onBlur}
          editable={editable}
        />
        {icon && (
          <TouchableOpacity onPress={onPress}>
            {text ? (
              <Text style={styles.tuchText}>{tuchText}</Text>
            ) : (
              <Icon
                name={iconName}
                type={iconType}
                size={20}
                color={COLORS.lightGray}
              />
            )}
          </TouchableOpacity>
        )}
      </View>
      {errors && touched && <Text style={styles.errorText}>{errors}</Text>}
    </>
  );
};

export default GlobalInput;

const styles = StyleSheet.create({
  container: {
    height: HP_WP.hp(5),
    width: HP_WP.wp(92),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  countryPicker: {
    height: HP_WP.hp(5),
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    color: COLORS.lightGray,
    fontSize: SIZE.N,
    height: HP_WP.hp(5),
    fontFamily: Font.medium,
    lineHeight:20
  },
  errorText: {
    fontSize: SIZE.S,
    fontFamily: Font.regular,
    color: COLORS.orange,
  },
  codeTxt: {
    fontSize: SIZE.N,
    color: COLORS.black,
    fontFamily: Font.medium,
  },
  inputNameText: {
    color: COLORS.darkGray,
    fontSize: SIZE.N,
    fontFamily: Font.medium,
  },
  tuchText: {
    fontSize: SIZE.N,
    color: COLORS.blue,
    fontFamily: Font.medium,
  },
});
