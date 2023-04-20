import { ScrollView, StyleSheet, Text, View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, { useState } from 'react';
import { CountryPicker } from 'react-native-country-codes-picker';
import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import { COLORS, HP_WP, SIZE } from '../common/theme';
import GlobalInput from '../common/GlobalInput';
import GlobalButton from '../common/GlobalButton';

const ProfileEdit = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');

  const [openCountryPicker, setOpenCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [isCounty, setCountry] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };
  return (
    <Container >
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <GlobalHeader title={'Edit'} />
      <View style={styles.mainContainer}>
        <Text style={styles.accountSettings}>Account Settings</Text>
        <GlobalInput placeholder={'Jenny'} inputStyle={{ marginTop: 10 }} />
        <GlobalInput
          placeholder="9876543210"
          keyboardType={'number-pad'}
          countryCode
          code={[countryCode]}
          openCode={() => setOpenCountryPicker(true)}
          inputStyle={{ marginTop: 10 }}
        />
        <GlobalInput
          onPress={showDatePicker}
          icon
          iconName="calendar"
          iconType="entypo"
          placeholder={'02-05-1997'}
          inputStyle={{ marginTop: 10 }}
        />
        <GlobalInput
          placeholder={'abcqwertyu@gmail.com'}
          inputStyle={{ marginTop: 10 }}
        />
        <GlobalButton onPress={() => navigation.goBack()} Style={styles.button} title={'Save'} />
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
        placeholderTextColor="#000"
        style={styles.countryPicker}
      />
    </Container>
  );
};

export default ProfileEdit;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: HP_WP.wp(4),
  },
  accountSettings: {
    marginTop: HP_WP.hp(4),
    color: COLORS.black,
    fontSize: SIZE.L,
  },
  button: {
    marginTop: HP_WP.hp(3),
  },
  countryPicker: {
    modal: {
      width: '100%',
      bottom: 0,
      position: 'absolute',
      height: Platform.OS === 'ios' ? 500 : 360,
    },
    countryName: {
      color: '#000',
    },
    textInput: {
      color: '#000',
      paddingHorizontal: 10,
    },
    dialCode: {
      color: '#000',
    },
    searchMessageText: {
      color: '#000',
    },
  },
});
