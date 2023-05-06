import React, {useState} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {t} from 'i18next';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Toast from 'react-native-toast-message';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import GradientContainer from '../common/GradientContainer';
import GlobalButton from '../common/GlobalButton';

const FitMatch = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  return (
    <GradientContainer>
      <View style={styles.mainContainer}>
        <Text style={styles.matchText}>{t('itsMatch')}</Text>
        <Text style={styles.likesText}>{t('lucyLikes')}</Text>
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
          title={t('sendMessage')}
        />
        <GlobalButton
          onPress={() => navigation.goBack()}
          Style={styles.bottomButton}
          title={t('keepSwiping')}
        />
      </View>
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size="large"
        overlayColor="rgba(0,0,0,0.5)"
      />
    </GradientContainer>
  );
};

export default FitMatch;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchText: {
    fontSize: 40,
    color: COLORS.white,
    fontFamily: Font.DancingScript,
  },
  likesText: {
    fontSize: SIZE.N,
    color: COLORS.white,
    fontFamily: Font.regular,
    marginBottom: 20,
    marginTop: 10,
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
