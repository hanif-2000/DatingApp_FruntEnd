import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import { COLORS, Font, HP_WP, IMAGE, SIZE } from '../common/theme';
import GlobalButton from '../common/GlobalButton';
import GradientContainer from '../common/GradientContainer';
import { useStore } from '../service/AppData';


// https://jadeen.firebaseapp.com/__/auth/handler

const LoginWithFacebook = () => {
  const { setToken, setUserData } = useStore()
  // const [accessToken, setAccessToken] = React.useState(null);
  let Route = useNavigation();

  const facebookLogin = async () => {
    try {
      LoginManager.logOut()
      if (Platform.OS === "android") {
        LoginManager.setLoginBehavior("web_only")
      }
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        throw 'Something went wrong obtaining access token';
      }
      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      const userData = await auth().signInWithCredential(facebookCredential);
      console.warn('userData-----', userData);
      const { additionalUserInfo, user } = userData
      const { profile } = additionalUserInfo
      const { uid, displayName, email } = user
      // handleSocialLogin(uid, 'facebook', email, displayName, profile?.first_name, profile?.last_name)
    } catch (error) {
      console.warn('error------>', error);
    }
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
        onPress={() => facebookLogin()}
        title={'LOGIN WITH FACEBOOK'}
        textStyle={{ color: COLORS.black }}
        Style={{ backgroundColor: COLORS.white }}
      />
      {/* <View style={{
        borderRadius: 30,
        height: HP_WP.hp(5.5),
        width: HP_WP.wp(75),
        alignSelf: 'center',
        alignItems: 'center',

      }}>
        <LoginButton
          onLoginFinished={() => {
            handleLogin()
          }}
        />
      </View> */}

    </GradientContainer>
  );
};

export default LoginWithFacebook;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: HP_WP.wp(10),
  },
  choseLanguageBtn: {
    marginTop: HP_WP.hp(2),
    alignSelf: 'flex-end',
  },
  choseLanguageText: {
    fontSize: SIZE.L,
    color: COLORS.black,
    fontFamily: Font.semiBold,
  },
  logo: {
    height: HP_WP.hp(18),
    width: HP_WP.wp(36),
    alignSelf: 'center',
    marginTop: HP_WP.hp(10),
  },
  txt: {
    fontSize: SIZE.M,
    color: COLORS.white,
    fontFamily: Font.semiBold,
    textAlign: 'center',
    marginTop: HP_WP.hp(15),
  },
  underLineText: {
    textDecorationLine: 'underline',
    fontSize: SIZE.N,
  },
  button: {
    backgroundColor: COLORS.white,
    marginTop: HP_WP.hp(10),
  },
  buttonText: {
    color: COLORS.black,
    marginLeft: 5,
  },
  languageModal: {
    position: 'absolute',
    width: HP_WP.wp(38),
    padding: 10,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 12,
    top: 50,
    height: 200,
    alignSelf: 'flex-end',
  },
  language: {
    fontSize: SIZE.L,
    color: COLORS.black,
    fontFamily: Font.regular,
  },
});
