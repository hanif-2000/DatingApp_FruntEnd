import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import GlobalHeader from '../comman/GlobalHeader';
import Container from '../comman/Container';
import {COLORS, Font, HP_WP, SIZE} from '../comman/theme';

const LoginWithPhone = () => {
  const [show, setShow] = useState(false);
  const [countryCode, setCountryCode] = useState('');

  return (
    <Container Style={styles.container}>
      <GlobalHeader />
      <View style={styles.innarMainContainer}>
        <Text style={styles.verifyNumber}>Verify phone number</Text>
        <View style={styles.countryPickerContainer}>
          <TouchableOpacity
            onPress={() => setShow(true)}
            style={{
              width: HP_WP.wp(25),
              borderWidth:1,
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontSize: 20,
              }}>
              {countryCode}
            </Text>
          </TouchableOpacity>
          <CountryPicker
            show={show}
            pickerButtonOnPress={item => {
              setCountryCode(item.dial_code);
              setShow(false);
            }}
          />
        </View>
      </View>
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
  },
  countryPickerContainer: {
    flexDirection: 'row',
    marginTop:HP_WP.hp(6),
    alignItems:'center',
  },
});
