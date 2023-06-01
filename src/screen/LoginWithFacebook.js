import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  StatusBar,
  TouchableOpacity,
  View,
  Pressable,
  FlatList,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import '../language/i18n';
import Toast from 'react-native-toast-message';
import {useStore} from '../service/AppData';
// import {LoginManager, AccessToken} from 'react-native-fbsdk';
import { Settings,LoginButton,LoginManager, AccessToken } from 'react-native-fbsdk-next';

import auth from '@react-native-firebase/auth';


import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import GlobalButton from '../common/GlobalButton';
Settings.setAppID('948968476240075');
Settings.initializeSDK();

// https://jadeen.firebaseapp.com/__/auth/handler

const LoginWithFacebook = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [languages, setLanguages] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('ENGLISH');

  const {t, i18n} = useTranslation();

  const DATA = [
    {
      language: 'ENGLISH',
    },
    {
      language: 'ALBANIAN',
    },
  ];

  const changeLanguage = value => {
    i18n
      .changeLanguage(value)
      .then(() => {
        setCurrentLanguage(value);
        setLanguages(value);
        setVisible(false);
      })
      .catch(err => console.log(err));
  };

  const {setToken, setUserData} = useStore();
  // const [accessToken, setAccessToken] = React.useState(null);
  let Route = useNavigation();

  const facebookLogin = async () => {
    try {
      LoginManager.logOut();
      if (Platform.OS === 'android') {
        LoginManager.setLoginBehavior('web_only');
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
      const {additionalUserInfo, user} = userData;
      const {profile} = additionalUserInfo;
      const {uid, displayName, email} = user;
      // handleSocialLogin(uid, 'facebook', email, displayName, profile?.first_name, profile?.last_name)
    } catch (error) {
      console.warn('error------>', error);
    }
  };

  return (
    <LinearGradient
      start={{x: 0, y: 0.2}}
      end={{x: 0, y: 0.8}}
      colors={[COLORS.white, COLORS.purple, COLORS.black]}
      style={styles.linearGradient}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <Pressable onPress={() => setVisible(false)} style={{flex: 1}}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.choseLanguageBtn}
          onPress={() => setVisible(true)}>
          <Text style={styles.choseLanguageText}>
            {languages == null ? 'Select Language' : currentLanguage}
          </Text>
        </TouchableOpacity>
        <Image source={IMAGE.Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.txt}>
          {t('youAgree')} <Text style={styles.underLineText}>{t('terms')}</Text>
          {'\n'}
          {t('learnProcess')}{' '}
          <Text style={styles.underLineText}>
            {t('privacy')}
            {'\n'}
            {t('policy')}
          </Text>{' '}
          {t('and')}{' '}
          <Text style={styles.underLineText}>{t('cookiesPolicy')}</Text>
        </Text>
        <GlobalButton
          textStyle={styles.buttonText}
          icon
          // onPress={() => facebookLogin()}
          onPress={() => Route.navigate('LoginWithPhone')}
          title={t('loginFacebook')}
          Style={styles.button}
        />
        {visible == true && (
          <View style={styles.languageModal}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={DATA}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => changeLanguage(item.language)}
                  style={{paddingVertical: 3}}>
                  <Text style={styles.language}>{item.language}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
      </Pressable>
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size="large"
        overlayColor="rgba(0,0,0,0.5)"
      />
    </LinearGradient>
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
