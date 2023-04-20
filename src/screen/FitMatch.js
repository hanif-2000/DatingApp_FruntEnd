import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../comman/theme';
import Container from '../comman/Container';
import {Text} from 'react-native-elements';
import GlobalButton from '../comman/GlobalButton';

const FitMatch = ({navigation}) => {
  return (
    <Container translucent={true} isLight={true} hidden={false}>
      <LinearGradient
        start={{x: 0.9, y: 0}}
        end={{x: 0.9, y: 0.9}}
        colors={[COLORS.lightPurple, COLORS.black]}
        style={styles.linearGradient}>
        <View style={styles.mainContainer}>
          <Image source={IMAGE.itsMatch} style={styles.matchText} />
          <Text style={styles.likesText}>Lucy likes you too</Text>
          <View>
            <Image
              source={IMAGE.MatchImage1}
              style={styles.logo}
              resizeMode="contain"
            />
            <Image
              source={IMAGE.MatchImage}
              style={[styles.logo, styles.matchImage]}
              resizeMode="cover"
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
      </LinearGradient>
    </Container>
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
  logo: {
    height: HP_WP.hp(14),
    width: HP_WP.wp(30),
    borderRadius: 100,
    marginRight: HP_WP.wp(10),
  },
  matchImage: {
    borderColor: COLORS.purple,
    borderWidth: 3,
    position: 'absolute',
    right: -85,
  },
  topButton: {
    backgroundColor: '#BB34D2',
    marginBottom: 10,
    marginTop: 5,
    marginTop: HP_WP.hp(10),
  },
  bottomButton: {
    backgroundColor: '#000',
    marginBottom: 10,
    marginTop: 5,
    borderColor: '#BB34D2',
    borderWidth: 2,
  },
});
