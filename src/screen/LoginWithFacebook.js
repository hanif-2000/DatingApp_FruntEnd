import React from 'react';
import { StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { COLORS, Font, HP_WP, IMAGE, SIZE } from '../common/theme';
import Container from '../common/Container';
import { Text } from 'react-native-elements';
import GlobalButton from '../common/GlobalButton';

const LoginWithFacebook = () => {

  let Route = useNavigation()

  return (
    <LinearGradient
      start={{ x: 0.9, y: 0 }}
      end={{ x: 0.9, y: 0.9 }}
      colors={['#AA3FEC', '#000000']}
      style={styles.linearGradient}>
      <Container translucent={false} hidden={false} isLight={true}>
        <LinearGradient
          start={{ x: 0.9, y: 0 }}
          end={{ x: 0.9, y: 0.9 }}
          colors={['#AA3FEC', '#000000']}
          style={styles.linearGradient}>
          <Image source={IMAGE.Logo} style={styles.logo} resizeMode='contain' />
          <Text style={styles.txt}>
            By clicking Log In, you agree with our{' '}
            <Text style={{ textDecorationLine: 'underline', color: COLORS.white }}>
              Terms.
            </Text>
            {'\n'}Learn how we process your data in our{' '}
            <Text style={{ textDecorationLine: 'underline', color: COLORS.white }}>
              Privacy Policy
            </Text>{' '}
            and{' '}
            <Text
              style={{
                textDecorationLine: 'underline',
                color: COLORS.white,
              }}>
              Cookies Policy.
            </Text>
          </Text>
          <GlobalButton
            icon
            onPress={() => Route.navigate('LoginWithPhone')}
            title={'LOGIN WITH FACEBOOK'}
            textStyle={{ color: COLORS.black }}
            Style={{ backgroundColor: '#fff' }}
          />
        </LinearGradient>
      </Container>
    </LinearGradient>

  );
};

export default LoginWithFacebook;

const styles = StyleSheet.create({
  linearGradient: { flex: 1, paddingHorizontal: HP_WP.wp(10) },
  logo: {
    height: HP_WP.hp(15),
    width: HP_WP.wp(30),
    alignSelf: 'center',
    marginTop: HP_WP.hp(20),
  },
  txt: {
    fontSize: SIZE.N,
    color: COLORS.white,
    fontFamily: Font.medium,
    textAlign: 'center',
    marginVertical: HP_WP.hp(12),
  },
});
