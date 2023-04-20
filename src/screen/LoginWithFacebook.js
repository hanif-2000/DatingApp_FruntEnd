import React from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../comman/theme';
import GlobalButton from '../comman/GlobalButton';
import GradientContainer from '../comman/GradientContainer';

const LoginWithFacebook = () => {
  let Route = useNavigation();

  return (
    <GradientContainer translucent={false} hidden={false}>
      <Image source={IMAGE.Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.txt}>
        By clicking Log In, you agree with our{' '}
        <Text style={{textDecorationLine: 'underline', fontSize: SIZE.N}}>
          Terms.
        </Text>
        {'\n'}Learn how we process your data in our{' '}
        <Text style={{textDecorationLine: 'underline', fontSize: SIZE.N}}>
          Privacy{'\n'}Policy
        </Text>{' '}
        and{' '}
        <Text
          style={{
            textDecorationLine: 'underline',
            fontSize: SIZE.N,
          }}>
          Cookies Policy.
        </Text>
      </Text>
      <GlobalButton
        icon
        onPress={() => Route.navigate('LoginWithPhone')}
        title={'LOGIN WITH FACEBOOK'}
        textStyle={{color: COLORS.black}}
        Style={{backgroundColor: '#fff'}}
      />
    </GradientContainer>
  );
};

export default LoginWithFacebook;

const styles = StyleSheet.create({
  linearGradient: {flex: 1, paddingHorizontal: HP_WP.wp(10)},
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
});
