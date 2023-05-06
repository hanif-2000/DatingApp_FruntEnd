import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import {COLORS, HP_WP, IMAGE} from '../common/theme';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginWithFacebook');
    }, 2000);
  }, []);

  return (
    <LinearGradient
      start={{x: 0, y: 0.2}}
      end={{x: 0, y: 0.8}}
      colors={[COLORS.white, COLORS.purple, COLORS.black]}
      style={styles.linearGradient}>
      <Image source={IMAGE.Logo} resizeMode="contain" style={styles.logo} />
    </LinearGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: HP_WP.hp(20),
    width: HP_WP.wp(40),
    marginBottom: HP_WP.wp(40),
  },
});
