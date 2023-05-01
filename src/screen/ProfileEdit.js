import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import React, {useState} from 'react';
import {CountryPicker} from 'react-native-country-codes-picker';
import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import {COLORS, Font, HP_WP, SIZE} from '../common/theme';
import GlobalInput from '../common/GlobalInput';
import GlobalButton from '../common/GlobalButton';
import Moment from 'moment';

const ProfileEdit = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState();

  const [openCountryPicker, setOpenCountryPicker] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [isCounty, setCountry] = useState();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(Moment(date).format('DD-MM-YYYY'));
    hideDatePicker();
    console.warn('date',date);
  };
  return (
    <Container>
      <GlobalHeader
        title={'Edit'}
        mainContainer={{marginHorizontal: HP_WP.wp(4)}}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.accountSettings}>Account Settings</Text>
        <GlobalInput placeholder={'Jenny'} inputStyle={{marginTop: 10}} />
        <GlobalInput
          placeholder="9876543210"
          keyboardType={'number-pad'}
          countryCode
          code={[countryCode]}
          openCode={() => setOpenCountryPicker(true)}
          inputStyle={{marginTop: 10}}
          textInputStyle={styles.input}
        />
        <GlobalInput
          onPress={showDatePicker}
          editable={false}
          icon
          iconName="calendar"
          iconType="entypo"
          placeholder={'02-05-1997'}
          inputStyle={{marginTop: 10}}
          value={date}
        />

        <GlobalInput
          placeholder={'abcqwertyu@gmail.com'}
          inputStyle={{marginTop: 10}}
        />
        <GlobalButton
          onPress={() => navigation.goBack()}
          Style={styles.button}
          title={'Save'}
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
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        maximumDate={new Date(Date.now() - 86400000)}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
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
    fontFamily: Font.medium,
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
      color: COLORS.black,
    },
    textInput: {
      color: COLORS.black,
      paddingHorizontal: 10,
    },
    dialCode: {
      color: COLORS.black,
    },
    searchMessageText: {
      color: COLORS.black,
    },
  },
  input: {
    marginLeft: 7,
    marginTop: 4,
  },
});
