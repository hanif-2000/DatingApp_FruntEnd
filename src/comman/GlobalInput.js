import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS, Font, SIZE} from './theme';
import { Icon } from 'react-native-elements';

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
  iconType
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
          <TouchableOpacity onPress={openCode} style={{marginRight: 5}}>
            <Text style={styles.codeTxt}>{code}</Text>
          </TouchableOpacity>
        )}
        {inputName && <Text style={styles.inputNameText}>{label}</Text>}

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
            <Image
              source={showIcon}
              resizeMode={'contain'}
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        )}
         {anyIcon && (
          <TouchableOpacity onPress={onPress}>
            <Icon  name={iconName}
            type={iconType}
            size={20}
            color={'#8E8E8E'}/>
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
    height: hp(5),
    width: wp(92),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  input: {
    flex: 1,
    color: COLORS.lightGray,
    fontSize: SIZE.M,
  },
  iconStyle: {
    height: hp(2.5),
    width: wp(5),
  },
  errorText: {
    fontSize: SIZE.S,
  },
  codeTxt: {
    fontSize: 15,
    color: '#000',
    fontWeight: '500',
  },
  inputNameText: {
    color: COLORS.darkGray,
    fontSize:SIZE.N
  },
});
