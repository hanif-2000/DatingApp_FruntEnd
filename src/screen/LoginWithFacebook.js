import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {LoginManager, AuthenticationToken} from 'react-native-fbsdk-next';
import { sha256 } from 'react-native-sha256';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import GlobalButton from '../common/GlobalButton';
import GradientContainer from '../common/GradientContainer';

// https://jadeen.firebaseapp.com/__/auth/handler

const LoginWithFacebook = () => {
  let Route = useNavigation();

  const onHandle = async () => {
    const nonce = '123456';
    const nonceSha256 = await sha256(nonce);
    const result = await LoginManager.logInWithPermissions(
      ['public_profile', 'email'],
      'limited',
      nonceSha256,
    );

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    const data = await AuthenticationToken.getAuthenticationTokenIOS();

    if (!data) {
      throw 'Something went wrong obtaining authentication token';
    }
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.authenticationToken,
      nonce,
    );
    return auth().signInWithCredential(facebookCredential);
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
        onPress={()=>onHandle().then(res=>{
          console.warn('res==>',res)
        }).catch(error=>console.warn('error==',error))}
        // onPress={() => Route.navigate('LoginWithPhone')}
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
