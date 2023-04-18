import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import OTPInputView from '@twotalltotems/react-native-otp-input';

import Container from '../comman/Container';
import {COLORS, HP_WP, SIZE} from '../comman/theme';
import GlobalHeader from '../comman/GlobalHeader';
import GlobalButton from '../comman/GlobalButton';

const Otp = ({navigation}) => {
  const OTPRef = useRef(null);
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
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          onCodeFilled={code => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />
        <Text style={styles.bottomText}>RESEND</Text>
        <GlobalButton
          Style={styles.buttonStyle}
          title={'CONTINUE'}
          onPress={() => navigation.navigate('MainStack' ,{screen:'Profile'})}
        />
      </View>
    </Container>
  );
};

export default Otp;

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
    textAlign: 'center',
  },
  buttonStyle: {
    marginTop: HP_WP.hp(3),
  },
});
