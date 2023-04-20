import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import Container from '../common/Container';
import {COLORS, Font, HP_WP, SIZE} from '../common/theme';
import GlobalHeader from '../common/GlobalHeader';
import GlobalButton from '../common/GlobalButton';

const OtpVerification = ({navigation}) => {
  const [clearOTP, setClearOTP] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  return (
    <Container Style={styles.container}>
      <GlobalHeader />
      <View style={styles.innarMainContainer}>
        <Text style={styles.smsCode}>Enter SMS Code </Text>
        <OTPInputView
          style={styles.OtpInputStyle}
          pinCount={4}
          keyboardType={'phone-pad'}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <TouchableOpacity style={{alignSelf:'center'}}>
        <Text style={styles.bottomText}>RESEND</Text>
        </TouchableOpacity>
        <GlobalButton
          Style={styles.buttonStyle}
          title={'CONTINUE'}
          onPress={() => navigation.navigate('MainStack' ,{screen:'Home'})}
        />
      </View>
    </Container>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: HP_WP.wp(5),
  },
  innarMainContainer: {
    marginHorizontal: HP_WP.wp(7),
  },
  smsCode: {
    fontSize: SIZE.XT,
    color: COLORS.blk,
    marginTop: HP_WP.hp(3),
    fontFamily:Font.semiBold
  },
  OtpInputStyle: {
    height: HP_WP.hp(6),
    marginTop: HP_WP.hp(4),
  },
  underlineStyleBase: {
    width: HP_WP.wp(15),
    borderWidth: 0,
    borderBottomWidth: 1.5,
    borderBottomColor: '#8E8E8E',
    color: COLORS.black,
    fontSize: SIZE.L,
  },
  bottomText: {
    color: '#8C8C8C',
    fontSize: SIZE.M,
    marginTop: HP_WP.hp(3),
    fontFamily:Font.medium
  },
  buttonStyle: {
    marginTop: HP_WP.hp(3),
  },
});
