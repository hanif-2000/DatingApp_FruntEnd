import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {LoginManager} from 'react-native-fbsdk-next';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import GlobalButton from '../common/GlobalButton';
import GradientContainer from '../common/GradientContainer';

// https://jadeen.firebaseapp.com/__/auth/handler

const LoginWithFacebook = () => {
  let Route = useNavigation();

  const onHandle = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      function (result) {
        if (result.isCancelled) {
          console.warn('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <GradientContainer translucent={false} hidden={false}>
      <Image source={IMAGE.Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.txt}>
        By clicking Log In, you agree with our{' '}
        <Text style={styles.underLineText}>Terms.</Text>
        {'\n'}Learn how we process your data in our{' '}
        <Text style={styles.underLineText}>Privacy{'\n'}Policy</Text> and{' '}
        <Text style={styles.underLineText}>Cookies Policy.</Text>
      </Text>
      <GlobalButton
        icon
        // onPress={onHandle}
        onPress={() => Route.navigate('LoginWithPhone')}
        title={'LOGIN WITH FACEBOOK'}
        textStyle={{color: COLORS.black}}
        Style={{backgroundColor: COLORS.white}}
      />
    </GradientContainer>
  );
};

export default LoginWithFacebook;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: HP_WP.wp(10),
  },
  logo: {
    height: HP_WP.hp(15),
    width: HP_WP.wp(30),
    alignSelf: 'center',
    marginTop: HP_WP.hp(20),
  },
  txt: {
    fontSize: SIZE.M,
    color: COLORS.white,
    fontFamily: Font.semiBold,
    textAlign: 'center',
    marginVertical: HP_WP.hp(12),
  },
  underLineText: {
    textDecorationLine: 'underline',
    fontSize: SIZE.N,
  },
});
