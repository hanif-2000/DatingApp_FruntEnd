import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {HP_WP, IMAGE} from '../common/theme';
import Container from '../common/Container';

const Wellcome = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginWithFacebook');
    }, 2000);
  }, []);

  return (
    <LinearGradient
    start={{x: 0.9, y: 0}}
    end={{x: 0.9, y: 0.9}}
    colors={['#AA3FEC', '#000000']}
    style={styles.linearGradient}>
    <Container translucent={true} isLight={true} hidden={false}>
      <LinearGradient
        start={{x: 0.9, y: 0}}
        end={{x: 0.9, y: 0.9}}
        colors={['#AA3FEC', '#000000']}
        style={styles.linearGradient}>
        <Image
          source={IMAGE.Logo}
          resizeMode='contain'
          style={{
            height: HP_WP.hp(15),
            width: HP_WP.wp(30),
            alignSelf: 'center',
            marginTop: HP_WP.hp(20),
          }}
        />
      </LinearGradient>
    </Container>
    </LinearGradient>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  linearGradient: {flex: 1},
});
