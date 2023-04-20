import React, {useEffect} from 'react';
import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {HP_WP, IMAGE} from '../comman/theme';
import Container from '../comman/Container';
import GradientContainer from '../comman/GradientContainer';

const Wellcome = ({navigation}) => {
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

export default Wellcome;

const styles = StyleSheet.create({
  linearGradient: {flex: 1},
});
