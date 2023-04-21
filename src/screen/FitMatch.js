import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import {Text} from 'react-native-elements';
import GradientContainer from '../common/GradientContainer';
import GlobalButton from '../common/GlobalButton';

const FitMatch = ({navigation}) => {
  return (
    <GradientContainer>
      <View style={styles.mainContainer}>
        <Image source={IMAGE.itsMatch} style={styles.matchText} />
        <Text style={styles.likesText}>Lucy likes you too</Text>
        <View style={styles.imageContainer}>
          <Image
            source={IMAGE.MatchImage1}
            style={[styles.matchImage, {right: -15}]}
            resizeMode="contain"
          />
          <Image
            source={IMAGE.MatchImage}
            style={[styles.matchImage, {left: -15}]}
            resizeMode="contain"
          />
        </View>
        <GlobalButton
          onPress={() => navigation.navigate('ChattingScreen')}
          Style={styles.topButton}
          title={'SEND A MESSAGE '}
        />
        <GlobalButton
          onPress={() => navigation.goBack()}
          Style={styles.bottomButton}
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
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchText: {
    width: HP_WP.wp(60),
    height: HP_WP.hp(4),
    resizeMode: 'contain',
  },
  likesText: {
    fontSize: SIZE.N,
    color: COLORS.white,
    fontFamily: Font.regular,
    marginVertical: 20,
  },
  imageContainer: {
    height: 110,
    alignSelf: 'center',
  },
  matchImage: {
    borderColor: COLORS.purple,
    position: 'absolute',
    height: 110,
    width: 110,
    borderRadius: 100,
  },
  topButton: {
    backgroundColor: COLORS.purple,
    marginBottom: 15,
    marginTop: HP_WP.hp(10),
  },
  bottomButton: {
    backgroundColor: COLORS.black,
    borderColor: COLORS.purple,
    borderWidth: 2,
  },
});
