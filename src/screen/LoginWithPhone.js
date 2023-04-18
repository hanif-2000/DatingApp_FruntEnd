import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import GlobalHeader from '../comman/GlobalHeader';
import Container from '../comman/Container';
import {COLORS, HP_WP, SIZE} from '../comman/theme';
import GlobalButton from '../comman/GlobalButton';

const LoginWithPhone = ({navigation}) => {
  return (
    <Container Style={styles.container}>
      <GlobalHeader />
      <View style={styles.innarMainContainer}>
        <Text style={styles.verifyNumber}>Verify phone number</Text>

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
  },
  bottomText: {
    color: '#8C8C8C',
    fontSize: SIZE.M,
    marginTop: HP_WP.hp(3),
  },
  touchableText: {
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
  buttonStyle: {
    marginTop: HP_WP.hp(3),
  },
});
