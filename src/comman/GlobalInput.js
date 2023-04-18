import React from 'react';
import {
  Image,
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
  showIcon,
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
  anyIcon,
  iconName,
  iconType,
  countryPikerStyle,
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
            style={[
              {
                marginRight: 10,
                height: HP_WP.hp(5),
                justifyContent: 'center',
                paddingHorizontal: 15,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.gray,
                marginLeft: HP_WP.wp(1),
              },
              countryPikerStyle,
            ]}>
            <Text style={styles.codeTxt}>{code}</Text>
          </TouchableOpacity>
        )}
        {inputName && <Text style={[styles.inputNameText]}>{label}</Text>}

        <TextInput
          style={[
            styles.input,
            {textAlign: inputName ? 'right' : 'left'},
            textInputStyle,
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
            <Image
              source={showIcon}
              resizeMode={'contain'}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}
        {anyIcon && (
          <TouchableOpacity onPress={onPress}>
            <Icon name={iconName} type={iconType} size={20} color={'#8E8E8E'} />
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
    width: HP_WP.wp(90),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: COLORS.lightGray,
    fontSize: SIZE.N,
  },
  iconStyle: {
    height: HP_WP.hp(2.5),
    width: HP_WP.wp(5),
  },
  errorText: {
    fontSize: SIZE.S,
  },
  codeTxt: {
    fontSize: SIZE.N,
    color: COLORS.black,
  },
  inputNameText: {
    color: COLORS.darkGray,
    fontSize: SIZE.N,
  },
});
