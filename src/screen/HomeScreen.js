import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../comman/Container';
import GlobalButton from '../comman/GlobalButton';
import GlobalHeader from '../comman/GlobalHeader';
import { HP_WP } from '../comman/theme';

const HomeScreen = () => {
  return (
    <Container Style={{paddingHorizontal:HP_WP.wp(5)}}>
      <GlobalHeader
        withoutIcon={true}
        logo={true}
        rightImage={true}
        rightIcon={require('../assets/images/filter.png')}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  logo:{}
})