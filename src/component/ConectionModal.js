import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useTranslation} from 'react-i18next';
import {COLORS, Font, SIZE} from '../common/theme';

const ConectionModal = ({isVisible}) => {
  const {t} = useTranslation();

  return (
    <Modal
      style={{margin: 0}}
      backdropColor="rgba(0,0,0,0.8)"
      backdropOpacity={1}
      animationIn="zoomInDown"
      animationOut="zoomOutUp"
      animationInTiming={1500}
      animationOutTiming={1500}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      isVisible={isVisible}>
      <View style={styles.container}>
        <Text style={styles.heading}>{t('noConection')}</Text>
        <Text style={styles.txt}>{t('check')}</Text>
      </View>
    </Modal>
  );
};

export default ConectionModal;

const styles = StyleSheet.create({
  container: {
    width: wp(80),
    paddingVertical: 10,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 20,
  },
  heading: {
    fontSize: SIZE.XXL,
    color: COLORS.orange,
    fontFamily: Font.medium,
  },
  txt: {
    fontSize: SIZE.L,
    color: COLORS.purple,
    fontFamily: Font.regular,
    marginTop: 8,
    textAlign: 'center',
  },
});
