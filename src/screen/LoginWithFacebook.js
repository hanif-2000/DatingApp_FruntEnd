import React from 'react';
import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../comman/theme';
import Container from '../comman/Container';
import {Text} from 'react-native-elements';
import GlobalButton from '../comman/GlobalButton';

const LoginWithFacebook = () => {
  return (
    <Container translucent={false} hidden={true} isLight={true}>
      <LinearGradient
        start={{x: 0.9, y: 0}}
        end={{x: 0.9, y: 0.9}}
        colors={['#AA3FEC', '#000000']}
        style={styles.linearGradient}>
        <Image source={IMAGE.Logo} style={styles.logo} />
        <Text style={styles.pragraf}>
          By clicking Log In, you agree with our Terms. Learn how we process
          your data in our Privacy Policy and Cookies Policy.
        </Text>
        <GlobalButton
          icon
          textStyle={{color: COLORS.black}}
          title={'Login With facebook'}
          Style={{backgroundColor: COLORS.white}}
        />
      </LinearGradient>
    </Container>
  );
};

export default LoginWithFacebook;

const styles = StyleSheet.create({
  linearGradient: {flex: 1, paddingHorizontal: HP_WP.wp(10)},
  pragraf: {
    fontSize: SIZE.N,
    color: COLORS.white,
    fontFamily: Font.semiBold,
    textAlign: 'center',
    marginVertical: HP_WP.hp(15),
  },
  logo: {
    height: HP_WP.hp(15),
    width: HP_WP.wp(30),
    alignSelf: 'center',
    marginTop: HP_WP.hp(20),
  },
});
