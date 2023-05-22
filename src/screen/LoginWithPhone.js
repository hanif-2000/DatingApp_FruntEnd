import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {t} from 'i18next';
import Toast from 'react-native-toast-message';

import GlobalHeader from '../common/GlobalHeader';
import Container from '../common/Container';
import {COLORS, Font, HP_WP, SIZE} from '../common/theme';
import GlobalButton from '../common/GlobalButton';
import GlobalInput from '../common/GlobalInput';
import {numberVerify} from '../service/API';

const LoginWithPhone = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [openCountryPicker, setOpenCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('IN +91');
  const [isCounty, setCountry] = useState();
  const [number, setNumber] = useState('6376969559');

  const onHandle = () => {
    if (number.length < 8) {
      Alert.alert('Check Number');
    } else {
      let body = {countryCode: countryCode, number: number, user_id: 1};
      setLoading(true);
      numberVerify(body, onResponse, onError);
    }
  };

  const onResponse = res => {
    setLoading(false);
    Toast.show({
      type: 'success',
      position: 'top',
      text1: res.message,
    });
    navigation.navigate('OtpVerification');
  };

  const onError = err => {
    setLoading(false);
    Toast.show({
      type: 'error',
      position: 'top',
      text1: err.data.error,
    });
  };

  return (
    <Container Style={styles.container}>
      <GlobalHeader />
      <View style={styles.innarMainContainer}>
        <Text style={styles.verifyNumber}>{t('verifyNumber')}</Text>
        <GlobalInput
          placeholder={t('phoneNumber')}
          keyboardType={'number-pad'}
          value={number}
          onChange={t => setNumber(t)}
          numberInput
          countryCode
          code={[isCounty, ' ', countryCode]}
          inputStyle={{width: HP_WP.wp(76)}}
          textInputStyle={styles.inputStyle}
          openCode={() => setOpenCountryPicker(true)}
          countryPikerStyle={styles.countryPikerStyle}
        />
        <Text style={styles.bottomText}>
          {t('youAgreeWithTerms')}
          <Text style={styles.touchableText}> {t('processYourData')}</Text>
        </Text>
        <GlobalButton
          Style={styles.buttonStyle}
          title={t('continue')}
          onPress={onHandle}
          // onPress={() => navigation.navigate('OtpVerification')}
        />
      </View>
      <CountryPicker
        show={openCountryPicker}
        pickerButtonOnPress={item => {
          setCountryCode(item.dial_code);
          setOpenCountryPicker(false);
          setCountry(item.code);
        }}
        onBackdropPress={() => {
          setOpenCountryPicker(false);
        }}
        placeholderTextColor={COLORS.black}
        style={styles.countryPicker}
      />
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size="large"
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Container>
  );
};

export default LoginWithPhone;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: HP_WP.wp(5),
  },
  innarMainContainer: {
    marginHorizontal: HP_WP.wp(7),
  },
  verifyNumber: {
    fontSize: SIZE.XT,
    color: COLORS.blk,
    marginTop: HP_WP.hp(3),
    fontFamily: Font.semiBold,
    marginBottom: HP_WP.hp(7),
    textAlign: 'center',
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.purple,
  },
  countryPikerStyle: {
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.gray,
    marginRight: 10,
    paddingHorizontal: 10,
    top: 0.5,
  },
  bottomText: {
    color: COLORS.lightGray,
    fontSize: SIZE.M,
    marginTop: HP_WP.hp(5),
    fontFamily: Font.medium,
  },
  touchableText: {
    textDecorationLine: 'underline',
    color: COLORS.lightGray,
  },
  buttonStyle: {
    marginTop: HP_WP.hp(5),
  },
  countryPicker: {
    modal: {
      width: '100%',
      bottom: 0,
      position: 'absolute',
      height: Platform.OS === 'ios' ? 500 : 360,
    },
    textInput: {
      color: COLORS.black,
      paddingHorizontal: 10,
    },
  },
});
