
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Wellcome = () => {
  return (
    <LinearGradient
    start={{x: 0.9, y: 0}} end={{x: 0.9, y: 0.9}}
      colors={['#AA3FEC', '#000000',]}
      style={styles.linearGradient}>
        {/* <Image source={}/> */}
    </LinearGradient>
  );
};

export default Wellcome;

const styles = StyleSheet.create({
  linearGradient: {flex: 1},
});
