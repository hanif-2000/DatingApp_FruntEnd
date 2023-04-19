import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Container from '../comman/Container';
import GlobalHeader from '../comman/GlobalHeader';
import {COLORS, HP_WP, SIZE} from '../comman/theme';
import GlobalInput from '../comman/GlobalInput';
import GlobalButton from '../comman/GlobalButton';

const Edit = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState('');

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
        <GlobalInput placeholder={'Jenny'} inputStyle={{marginTop: 10}} />
        <GlobalInput
          countryCode
          code={+91}
          placeholder={'9876543210'}
          inputStyle={{marginTop: 10}}
        />
        <GlobalInput
          onPress={showDatePicker}
          anyIcon
          iconName="calendar"
          iconType="entypo"
          placeholder={'02-05-1997'}
          inputStyle={{marginTop: 10}}
        />
        <GlobalInput
          placeholder={'abcqwertyu@gmail.com'}
          inputStyle={{marginTop: 10}}
        />
        <GlobalButton onPress={()=>navigation.navigate('PlanSetting')} Style={styles.button} title={'Save'} />
      </View>
    </Container>
  );
};

export default Edit;

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
});
