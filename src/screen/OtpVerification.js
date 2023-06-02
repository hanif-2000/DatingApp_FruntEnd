import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {t} from 'i18next';
import Toast from 'react-native-toast-message';

import Container from '../common/Container';
import {COLORS, Font, HP_WP, SIZE} from '../common/theme';
import GlobalHeader from '../common/GlobalHeader';
import GlobalButton from '../common/GlobalButton';
import {otpVerify} from '../service/API';

const OtpVerification = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const onHandle = () => {
    if (otp.length < 6) {
      setOtpError('success');
    } else {
      let body = {user_id: 1, otp: otp};
      setLoading(true);
      otpVerify(body, onResponse, onError);
    }
  };
  const onResponse = res => {
    setLoading(false);
    Toast.show({
      type: 'success',
      position: 'top',
      text1: res.message,
    });
    navigation.navigate('MainStack', {screen: 'Home'})
  };

  const onError = err => {
    setLoading(false);
    Toast.show({
      type: 'error',
      position: 'top',
      text1: err.error,
    });
  };
  return (
    <Container Style={styles.container}>
      <View style={styles.innarMainContainer}>
        <Text style={styles.smsCode}>{t('enterCode')}</Text>
        <OTPInputView
          style={styles.OtpInputStyle}
          pinCount={6}
          keyboardType={'phone-pad'}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeChanged={code => setOtp(code)}
          onCodeFilled={code => {
            setOtp(code);
            setOtpError('');
          }}
        />
        {otpError && <Text style={{color:COLORS.orange,marginTop:2,fontSize:SIZE.M}}>Enter OTP</Text>}
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text style={styles.bottomText}>{t('resend')}</Text>
        </TouchableOpacity>
        <GlobalButton
          Style={styles.buttonStyle}
          title={t('continue')}
          onPress={onHandle}
          // onPress={() => navigation.navigate('MainStack', {screen: 'Home'})}
        />
      </View>
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size="large"
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Container>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: HP_WP.wp(5),
    paddingTop:HP_WP.wp(10),
  },
  innarMainContainer: {
    marginHorizontal: HP_WP.wp(7),
  },
  smsCode: {
    fontSize: SIZE.XT,
    color: COLORS.blk,
    marginTop: HP_WP.hp(3),
    fontFamily: Font.semiBold,
    textAlign: 'center',
  },
  OtpInputStyle: {
    height: HP_WP.hp(6),
    marginTop: HP_WP.hp(4),
  },
  underlineStyleBase: {
    width: HP_WP.wp(10),
    borderWidth: 0,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.gray,
    color: COLORS.black,
    fontSize: SIZE.L,
  },
  bottomText: {
    color: COLORS.gray,
    fontSize: SIZE.N,
    marginTop: HP_WP.hp(3),
    fontFamily: Font.medium,
  },
  buttonStyle: {
    marginTop: HP_WP.hp(3),
  },
});
