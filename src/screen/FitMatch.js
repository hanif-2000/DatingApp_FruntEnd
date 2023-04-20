import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {HP_WP, IMAGE} from '../common/theme';
import {Image} from 'react-native-elements';
import GlobalButton from '../common/GlobalButton';
import GradientContainer from '../common/GradientContainer';

const FitMatch = ({navigation}) => {
  return (
    <GradientContainer>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 24, color: '#fff', fontWeight: '400'}}>
          It’s a Match!
        </Text>
        <Text style={{fontSize: 12, color: '#fff'}}>Lucy likes you too</Text>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            height: HP_WP.hp(15.2),
            marginVertical: 40,
          }}>
          <Image
            source={IMAGE.Lucy}
            style={[styles.logo, ]}
            resizeMode="contain"
          />
          <Image
            source={IMAGE.Lucy1}
            style={[
              styles.logo,
              {borderColor: '#B055E9', borderWidth: 1,},
            ]}
            resizeMode="contain"
          />
        </View>
        <GlobalButton
          onPress={() => navigation.navigate('ChattingScreen')}
          Style={{backgroundColor: '#BB34D2', marginBottom: 10, marginTop: 5}}
          title={'SEND A MESSAGE '}
        />
        <GlobalButton
          onPress={() => navigation.goBack()}
          Style={{
            backgroundColor: '#000',
            marginBottom: 10,
            marginTop: 5,
            borderColor: '#BB34D2',
            borderWidth: 2,
          }}
          title={'KEEP SWIPING'}
        />
      </View>
    </GradientContainer>
  );
};

export default FitMatch;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingHorizontal: HP_WP.wp(10),
  },
  logo: {
    height: HP_WP.hp(15),
    width: HP_WP.wp(30),
    borderRadius: 100,
  },
});
