import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import GlobalButton from '../common/GlobalButton';
import GradientContainer from '../common/GradientContainer';

const LoginWithFacebook = () => {
  let Route = useNavigation();

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
