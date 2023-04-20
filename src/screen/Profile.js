import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {BlurView} from '@react-native-community/blur';
import Spinner from 'react-native-loading-spinner-overlay';
import {Dropdown} from 'react-native-element-dropdown';
import RangeSlider from 'react-native-range-slider'
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';

import GlobalHeader from '../common/GlobalHeader';
import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import GlobalInput from '../common/GlobalInput';
import GlobalButton from '../common/GlobalButton';

const Profile = ({navigation}) => {
  const [nameOfFile, setNameOfFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [languageName, setLanguageName] = useState('English');
  const [marriage, setMarriage] = useState(false);
  const [network, setNetwork] = useState(false);
  const [groupChat, setGroupChat] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  const [minSelected, setMinSelected] = useState(0);
  const [maxSelected, setMaxSelected] = useState(0);
  const [distance, setDistance] = useState(0);

  const [preferredLanguages, setPreferredLanguages] = useState([
    {
      id: 1,
      name: 'English',
    },
    {
      id: 2,
      name: 'Hindi',
    },
  ]);

  const onChange = (min, max) => {
    setMinSelected(min);
    setMaxSelected(max);
  };

  const onChangeDistance = (min, max) => {
    setDistance(max);
  };

  const [planName, setPlanName] = useState('Free');
  const [plan, setPlan] = useState([
    {
      id: 1,
      name: 'Free',
    },
    {
      id: 2,
      name: 'Basic',
    },
  ]);
  const chooseFromGallery = () => {
    launchImageLibrary({selectionLimit: 1, mediaType: 'photo'})
      .then(images => {
        setNameOfFile(images.assets[0]);
        setModalVisible(false);
      })
      .catch(e => {
        setModalVisible(false);
      });
  };

  const chooseFromCamera = () => {
    launchCamera({mediaType: 'photo'})
      .then(image => {
        setModalVisible(false);
        setNameOfFile(image.assets[0]);
      })
      .catch(e => {
        setModalVisible(false);
      });
  };
  return (
    <LinearGradient
    start={{x: 0, y: 0}}
    end={{x: 2, y: 0}}
    locations={[0,0.4,]}
      colors={['#000000', '#BD94D7']}
      style={styles.linearGradient}>
      <SafeAreaView style={{flex:1}}>
        <StatusBar barStyle={'light-content'} />
        <View style={{flex:1,backgroundColor:"#fff"}}>
        <ImageBackground
          source={IMAGE.profileBgImage}
          resizeMode="stretch"
          style={styles.bgImg}>
          <GlobalHeader
            mainContainer={{paddingHorizotal: HP_WP.wp(5)}}
            light
            title={'Profile'}
            headerTitles={styles.headerText}
          />
          <View style={styles.mainContainer}>
            <View style={{alignSelf: 'center'}}>
              <Image source={IMAGE.Profile} style={styles.profileImg} />
              <TouchableOpacity
                style={styles.imageEdit}
                onPress={() => setModalVisible(true)}>
                <Icon name={'edit'} size={15} color={'#AA3FEC'} />
              </TouchableOpacity>
              <Text style={styles.nameText}>Jenny, 22</Text>
            </View>
          </View>
        </ImageBackground>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1, paddingBottom: 20}}>
          <View style={styles.mainContainer}>
            <View style={styles.accountSettingsContainer}>
              <Text style={styles.accountSettings}>Account Settings</Text>
              <Text
                style={styles.edit}
                onPress={() => navigation.navigate('ProfileEdit')}>
                Edit
              </Text>
            </View>
            <GlobalInput
              placeholder={'Jenny'}
              inputName
              label="Name"
              editable={false}
              inputStyle={{marginTop: 10}}
            />
            <GlobalInput
              placeholder={'+91 9876543210'}
              inputName
              label="Phone Number"
              inputStyle={{marginTop: 10}}
              editable={false}
            />
            <GlobalInput
              placeholder={'02-05-1997'}
              inputName
              label="Date of birth"
              inputStyle={{marginTop: 10}}
              editable={false}
            />
            <GlobalInput
              placeholder={'abcqwertyu@gmail.com'}
              inputName
              label="Email"
              inputStyle={{marginTop: 10}}
              editable={false}
            />
            <Text style={[styles.accountSettings, {marginTop: HP_WP.hp(2)}]}>
              Plan Settings
            </Text>
            <GlobalInput
              editable={false}
              text={true}
              icon={true}
              inputName={true}
              label="Current Plan"
              tuchText="Free"
              inputStyle={{marginTop: 10}}
              onPress={() => navigation.navigate('PlanSetting')}
            />
            <Text style={[styles.accountSettings, {marginTop: HP_WP.hp(2)}]}>
              Discovery Settings
            </Text>
            <GlobalInput
              editable={false}
              text={true}
              icon={true}
              inputName={true}
              label="Location"
              tuchText="My Current Location"
              inputStyle={{marginTop: 10}}
              // onPress={() =>navigation.navigate('PlanSetting')}
            />
            <View style={styles.dropDownView}>
              <Text style={styles.dropDownTitle}>Preferred Languages</Text>
              <Dropdown
                iconStyle={{tintColor: COLORS.blue}}
                style={[{paddingHorizontal: 16, height: 40, width: '30%'}]}
                data={preferredLanguages}
                maxHeight={240}
                labelField="name"
                valueField="name"
                value={languageName}
                placeholderStyle={styles.dropDownText}
                selectedTextStyle={styles.dropDownText}
                onChange={item => {
                  setLanguageName(item.name);
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => setMarriage(!marriage)}
              style={{
                borderColor: COLORS.light,
                height: HP_WP.hp(5),
                width: HP_WP.wp(92),
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                borderWidth: 0.8,
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <Text>Marriage (Opposite sex only)</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: marriage ? '#AA3FEC' : '#fff',
                  borderColor: marriage ? '#fff' : '#AA3FEC',
                }}>
                {marriage && <Icon name={'done'} size={15} color={'#fff'} />}
              </View>
            </TouchableOpacity>

            <View
              style={{
                borderColor: COLORS.light,
                borderWidth: 0.8,
                marginTop: 15,
                borderRadius:4
              }}>
              <View
                style={{
                  height: HP_WP.hp(5),
                  width: HP_WP.wp(92),
                  borderRadius: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <Text>Age Range</Text>
                <Text>
                  {minSelected}-{maxSelected}
                </Text>
              </View>

              <RangeSlider
                type="range" // ios only
                min={18}
                max={70}
                selectedMinimum={22} // ios only
                selectedMaximum={44} // ios only
                tintColor="#000"
                handleColor="#f368e0"
                handlePressedColor="#f368e0"
                tintColorBetweenHandles="#ff9ff3"
                onChange={(min, max) => onChange(min, max)}
              />
            </View>

            <TouchableOpacity
              onPress={() => setGroupChat(!groupChat)}
              style={{
                borderColor:COLORS.light,
                height: HP_WP.hp(5),
                width: HP_WP.wp(92),
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                borderWidth: 0.8,
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <Text>Group Chats</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: groupChat ? '#AA3FEC' : '#fff',
                  borderColor: groupChat ? '#fff' : '#AA3FEC',
                }}>
                {groupChat && <Icon name={'done'} size={15} color={'#fff'} />}
              </View>
            </TouchableOpacity>
            {groupChat && (
              <View
                style={{
                  borderColor: COLORS.light,
                  borderWidth: 0.8,
                  marginTop: 15,
                  borderRadius:4

                }}>
                <TouchableOpacity
                  onPress={() => setMale(!male)}
                  style={{
                    height: HP_WP.hp(5),
                    width: HP_WP.wp(92),
                    borderRadius: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    justifyContent: 'space-between',
                  }}>
                  <Text>Male</Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 1,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: male ? '#AA3FEC' : '#fff',
                      borderColor: male ? '#fff' : '#AA3FEC',
                    }}>
                    {male && <Icon name={'done'} size={15} color={'#fff'} />}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => setFemale(!female)}
                  style={{
                    height: HP_WP.hp(5),
                    width: HP_WP.wp(92),
                    borderRadius: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 10,
                    justifyContent: 'space-between',
                  }}>
                  <Text>Female</Text>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 1,
                      borderRadius: 20,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: female ? '#AA3FEC' : '#fff',
                      borderColor: female ? '#fff' : '#AA3FEC',
                    }}>
                    {female && <Icon name={'done'} size={15} color={'#fff'} />}
                  </View>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => setNetwork(!network)}
              style={{
                borderColor: COLORS.light,
                height: HP_WP.hp(5),
                width: HP_WP.wp(92),
                borderRadius: 4,
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                borderWidth: 0.8,
                marginTop: 15,
                justifyContent: 'space-between',
              }}>
              <Text>Network</Text>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderWidth: 1,
                  borderRadius: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: network ? '#AA3FEC' : '#fff',
                  borderColor: network ? '#fff' : '#AA3FEC',
                }}>
                {network && <Icon name={'done'} size={15} color={'#fff'} />}
              </View>
            </TouchableOpacity>

            <View
              style={{
                borderColor: COLORS.light,
                borderWidth: 0.8,
                marginTop: 15,
                borderRadius:4
              }}>
              <View
                style={{
                  height: HP_WP.hp(5),
                  width: HP_WP.wp(92),
                  borderRadius: 4,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                  justifyContent: 'space-between',
                }}>
                <Text>Maximum Distance (only upgrade )</Text>
                <Text>{distance}km.</Text>
              </View>

              <RangeSlider
                type="slider" // ios only
                min={0}
                max={100}
                selectedMinimum={0} // ios only
                selectedMaximum={100} // ios only
                tintColor="#000"
                handleColor="#f368e0"
                handlePressedColor="#f368e0"
                tintColorBetweenHandles="#ff9ff3"
                onChange={(min, max) => onChangeDistance(min, max)}
                hideLabels={true}
              />
            </View>
            <View>
              <GlobalButton
                Style={{
                  borderColor: 'gray',
                  width: HP_WP.wp(90),
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginVertical: 15,
                }}
                textStyle={{color: '#000'}}
                title={'Logout'}
              />

              <GlobalButton
                Style={{
                  borderColor: 'gray',
                  width: HP_WP.wp(90),
                  backgroundColor: '#fff',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginVertical: 10,
                }}
                textStyle={{color: 'red'}}
                title={'Delete Account'}
              />
            </View>
          </View>
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(false);
          }}>
          <BlurView
            style={styles.blurView}
            blurType="light"
            blurAmount={10}
            reducedTransparencyFallbackColor={COLORS.white}
          />
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Pressable style={styles.button} onPress={chooseFromCamera}>
                <Text style={styles.textStyle}>Take From Camera</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={chooseFromGallery}>
                <Text style={styles.textStyle}>Choose From Gallery</Text>
              </Pressable>
              <Pressable
                style={[styles.button, {backgroundColor: COLORS.orange}]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Cancle</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Spinner
          color={COLORS.purple}
          visible={loading}
          size="large"
          overlayColor="rgba(0,0,0,0.5)"
        />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Profile;

const styles = StyleSheet.create({
  linearGradient: {flex: 1,flexGrow:1},
  mainContainer: {
    paddingHorizontal: HP_WP.wp(4),
  },
  headerText: {
    color: COLORS.white,
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginBottom: 10,
    width: '100%',
    backgroundColor: COLORS.purple,
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: 'bold',
    textAlign: 'center',
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
    textDecorationLine: 'underline',
    marginRight: 5,
    fontSize: SIZE.N,
    color: COLORS.blue,
    fontFamily: Font.medium,
  },
  dropDownText: {
    fontSize: SIZE.N,
    color: COLORS.blue,
    fontFamily: Font.medium,
  },
  dropDownView: {
    borderColor: COLORS.gray,
    borderWidth: 0.8,
    backgroundColor: '#fff',
    height: HP_WP.hp(5),
    width: HP_WP.wp(92),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  dropDownTitle: {
    paddingLeft: 10,
    color: '#000',
    fontSize: 14,
    width: '70%',
  },
});
