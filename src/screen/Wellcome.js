import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {HP_WP, IMAGE} from '../comman/theme';
import Container from '../comman/Container';

const Wellcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginWithFacebook');
    }, 2000);
  }, []);

  return (
    <Container translucent={true} isLight={true} hidden={true}>
      <LinearGradient
        start={{x: 0.9, y: 0}}
        end={{x: 0.9, y: 0.9}}
        colors={['#AA3FEC', '#000000']}
        style={styles.linearGradient}>
        <Image source={IMAGE.Logo} style={styles.Logo} />
      </LinearGradient>
    </Container>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  linearGradient: {flex: 1},
  Logo: {
    height: HP_WP.hp(15),
    width: HP_WP.wp(30),
    alignSelf: 'center',
    marginTop: HP_WP.hp(20),
  },
});
