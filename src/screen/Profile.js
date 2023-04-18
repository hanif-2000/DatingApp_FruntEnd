import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Container from '../comman/Container';
import GlobalHeader from '../comman/GlobalHeader';
import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../comman/theme';
import {Icon} from 'react-native-elements';
import GlobalInput from '../comman/GlobalInput';

const Profile = ({navigation}) => {
  return (
    <Container>
      <ScrollView>
        <ImageBackground
          source={IMAGE.profileBgImage}
          resizeMode="stretch"
          style={styles.bgImg}>
          <View style={styles.mainContainer}>
            <GlobalHeader
              light
              title={'Profile'}
              headerTitles={styles.headerText}
            />
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGE.Profile} style={styles.profileImg} />
              <TouchableOpacity style={styles.imageEdit}>
                <Icon name={'edit'} size={15} color={'#AA3FEC'} />
              </TouchableOpacity>
              <Text style={styles.nameText}>Jenny, 22</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.mainContainer}>
          <View style={styles.accountSettingsContainer}>
            <Text style={styles.accountSettings}>Account Settings</Text>
            <Text style={styles.edit} onPress={() => navigation.navigate('Edit')}>
              Edit
            </Text>
          </View>
          <GlobalInput
            placeholder={'Jenny'}
            inputName
            label="Name"
            inputStyle={{marginTop: 10}}
          />
          <GlobalInput
            placeholder={'+91 9876543210'}
            inputName
            label="Phone Number"
            inputStyle={{marginTop: 10}}
          />
          <GlobalInput
            placeholder={'02-05-1997'}
            inputName
            label="Date of birth"
            inputStyle={{marginTop: 10}}
          />
          <GlobalInput
            placeholder={'abcqwertyu@gmail.com'}
            inputName
            label="Email"
            inputStyle={{marginTop: 10}}
          />
          <Text style={[styles.accountSettings, {marginTop: HP_WP.hp(2)}]}>
            Plan Settings
          </Text>
          <GlobalInput
            placeholder={'Free'}
            inputName
            label="Current Plan"
            inputStyle={{marginTop: 10}}
          />
          <Text style={[styles.accountSettings, {marginTop: HP_WP.hp(2)}]}>
            Discovery Settings
          </Text>
          <GlobalInput
            placeholder={'My Current Location'}
            inputName
            label="Location"
            inputStyle={{marginTop: 10}}
          />
          <GlobalInput
            placeholder={'English'}
            inputName
            label="Preferred Languages"
            inputStyle={{marginTop: 10}}
          />
          <GlobalInput
            placeholder={'X'}
            inputName
            label="Marriage  (Opposite sex only)"
            inputStyle={{marginTop: 10}}
          />
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: HP_WP.wp(4),
  },
  headerText: {
    color: COLORS.white,
  },
  profileImg: {
    width: HP_WP.wp(24),
    height: HP_WP.hp(12),
    borderRadius: 50,
    resizeMode: 'cover',
    alignSelf: 'center',
    marginVertical: HP_WP.wp(3),
  },
  imageEdit: {
    position: 'absolute',
    width: 22,
    height: 22,
    backgroundColor: COLORS.white,
    borderRadius: 50,
    top: 12,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: SIZE.M,
    marginBottom: 30,
  },
  accountSettingsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: HP_WP.hp(2),
    alignItems: 'center',
  },
  accountSettings: {
    color: COLORS.black,
    fontSize: SIZE.L,
  },
  edit: {
    color: COLORS.blue,
    textDecorationLine: 'underline',
  },
});
