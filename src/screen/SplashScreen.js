import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import {HP_WP, IMAGE} from '../common/theme';
import GradientContainer from '../common/GradientContainer';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('LoginWithFacebook');
    }, 2000);
  }, []);

  return (
    <GradientContainer translucent={true} isLight={true} hidden={false}>
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
    </GradientContainer>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  linearGradient: {flex: 1},
});
