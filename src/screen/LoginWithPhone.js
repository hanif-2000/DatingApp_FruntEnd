import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';

import GlobalHeader from '../comman/GlobalHeader';
import Container from '../comman/Container';
import {COLORS, Font, HP_WP, SIZE} from '../comman/theme';
import GlobalButton from '../comman/GlobalButton';
import GlobalInput from '../comman/GlobalInput';

const LoginWithPhone = ({navigation}) => {
  const [openCountryPicker, setOpenCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('IN +91');
  const [isCounty,setCountry] =useState()

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
          code={[isCounty,' ', countryCode]}
          inputStyle={{width: HP_WP.wp(76)}}
          textInputStyle={styles.inputStyle}
          openCode={() => setOpenCountryPicker(true)}
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
          onPress={() => navigation.navigate('Otp')}
        />
      </View>
      <CountryPicker
          show={openCountryPicker}
          pickerButtonOnPress={item => {
            setCountryCode(item.dial_code);
            setOpenCountryPicker(false);
            setCountry(item.code)
          }}
          onBackdropPress={() => {
            setOpenCountryPicker(false);
          }}
          placeholderTextColor="#000"
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
    marginBottom:HP_WP.hp(7)
  },
  bottomText: {
    color: '#8C8C8C',
    fontSize: SIZE.M,
    marginTop: HP_WP.hp(5),
    fontFamily: Font.medium,
  },
  touchableText: {
    textDecorationLine: 'underline',
    color: '#8C8C8C',
  },
  buttonStyle: {
    marginTop: HP_WP.hp(5),
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.purple,
  },

  countryPicker: {
    modal: {
      width: '100%',
      bottom: 0,
      position: 'absolute',
      height: Platform.OS === 'ios' ? 500 : 360,
    },
    countryName: {
      color: '#000',
    },
    textInput: {
      color: '#000',
      paddingHorizontal: 10,
    },
    dialCode: {
      color: '#000',
    },
    searchMessageText: {
      color: '#000',
    },
  },
});
