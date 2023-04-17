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
}) => {
  return (
    <>
      <View
        style={[
          styles.container,
          inputStyle,
          {borderColor: errors && touched ? COLORS.orange : COLORS.light},
        ]}>
        {countryCode && (
          <TouchableOpacity onPress={openCode} style={{marginRight: 5}}>
            <Text style={styles.codeTxt}>{code}</Text>
          </TouchableOpacity>
        )}
        <TextInput
          style={[styles.input]}
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
      </View>
      {errors && touched && <Text style={styles.errorText}>{errors}</Text>}
    </>
  );
};

export default GlobalInput;

const styles = StyleSheet.create({
  container: {
    height: hp(6),
    width: wp(90),
    borderWidth: 0.8,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2.5),
  },
  input: {
    flex: 1,
    color: COLORS.black,
    fontSize: SIZE.M,
    fontFamily: Font.mediam,
  },
  iconStyle: {
    height: hp(2.5),
    width: wp(5),
    tintColor: COLORS.gray,
  },
  errorText: {
    fontSize: SIZE.S,
    color: COLORS.orange,
    fontFamily: Font.regular,
  },
  codeTxt: {fontSize: 15, color: '#000', fontWeight: '500'},
});
