import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { CountryPicker } from 'react-native-country-codes-picker';

import GlobalHeader from '../common/GlobalHeader';
import Container from '../common/Container';
import { COLORS, Font, HP_WP, SIZE } from '../common/theme';
import GlobalButton from '../common/GlobalButton';
import GlobalInput from '../common/GlobalInput';

const LoginWithPhone = ({ navigation }) => {
  const [openCountryPicker, setOpenCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('IN +91');
  const [isCounty, setCountry] = useState();

  return (
    <Container Style={styles.container}>
      <GlobalHeader />
      <View style={styles.innarMainContainer}>
        <Text style={styles.verifyNumber}>Verify phone number</Text>
        <GlobalInput
          placeholder="Phone Number"
          keyboardType={'number-pad'}
          numberInput
          countryCode
          code={[isCounty, ' ', countryCode]}
          inputStyle={{ width: HP_WP.wp(76) }}
          textInputStyle={styles.inputStyle}
          openCode={() => setOpenCountryPicker(true)}
          countryPikerStyle={styles.countryPikerStyle}
        />
        <Text style={styles.bottomText}>
          By clicking Log In, you agree with our Terms. Learn how process your
          data in our Privacy Policy and Cookies Policy. By clicking Log In, you
          agree with our Terms. Learn how
          <Text style={styles.touchableText}>
            {' '}
            process your data in our Privacy Policy and Cookies
          </Text>
        </Text>
        <GlobalButton
          Style={styles.buttonStyle}
          title={'CONTINUE'}
          onPress={() => navigation.navigate('OtpVerification')}
        />
      </View>
      <CountryPicker
        show={openCountryPicker}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setOpenCountryPicker(false);
          setCountry(item.code);
        }}
        onBackdropPress={() => {
          setOpenCountryPicker(false);
        }}
        placeholderTextColor={COLORS.black}
        style={styles.countryPicker}
      />
    </Container>
  );
};

export default LoginWithPhone;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: HP_WP.wp(5),
  },
  innarMainContainer: {
    marginHorizontal: HP_WP.wp(7),
  },
  verifyNumber: {
    fontSize: SIZE.XT,
    color: COLORS.blk,
    marginTop: HP_WP.hp(3),
    fontFamily: Font.semiBold,
    marginBottom: HP_WP.hp(7),
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.purple,
  },
  countryPikerStyle: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.gray,
    marginRight: 10,
    paddingHorizontal: 10,
    top: 0.5,
  },
  bottomText: {
    color: COLORS.lightGray,
    fontSize: SIZE.M,
    marginTop: HP_WP.hp(5),
    fontFamily: Font.medium,
  },
  touchableText: {
    textDecorationLine: 'underline',
    color: COLORS.lightGray,
  },
  buttonStyle: {
    marginTop: HP_WP.hp(5),
  },
  countryPicker: {
    modal: {
      width: '100%',
      bottom: 0,
      position: 'absolute',
      height: Platform.OS === 'ios' ? 500 : 360,
    },
    countryName: {
      color: COLORS.black,
    },
    textInput: {
      color: COLORS.black,
      paddingHorizontal: 10,
    },
    dialCode: {
      color: COLORS.black,
    },
    searchMessageText: {
      color: COLORS.black,
    },
  },
 
});
