import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { BlurView } from '@react-native-community/blur';
import { Dropdown } from 'react-native-element-dropdown';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import { t } from 'i18next';
import Toast from 'react-native-toast-message';

import GlobalHeader from '../common/GlobalHeader';
import { COLORS, Font, HP_WP, IMAGE, SIZE } from '../common/theme';
import GlobalInput from '../common/GlobalInput';
import GlobalButton from '../common/GlobalButton';
import useAppData, { useStore } from '../service/AppData';
import { Logout_Api } from '../service/API';

const Profile = ({ navigation }) => {
  const [nameOfFile, setNameOfFile] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [languageName, setLanguageName] = useState('English');
  const [marriage, setMarriage] = useState(false);
  const [network, setNetwork] = useState(false);
  const [groupChat, setGroupChat] = useState(false);
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);

  // data geting from zustand
  const [{ userData, userId, accessToken ,languageList}] = useAppData();
  // console.warn(userData?.additionalUserInfo?.profile?.picture?.data?.url);

  const [distance, setDistance] = useState([2]);
  const [minAgeSelected, setMinAgeSelected] = useState(18);
  const [maxAgeSelected, setMaxAgeSelected] = useState(38);

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

  const onChange = (age) => {
    setMinAgeSelected(age[0]);
    setMaxAgeSelected(age[1]);
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
    launchImageLibrary({ selectionLimit: 1, mediaType: 'photo' })
      .then(images => {
        setNameOfFile(images.assets[0]);
        setModalVisible(false);
      })
      .catch(e => {
        setModalVisible(false);
      });
  };

  const chooseFromCamera = () => {
    launchCamera({ mediaType: 'photo' })
      .then(image => {
        setModalVisible(false);
        setNameOfFile(image.assets[0]);
      })
      .catch(e => {
        setModalVisible(false);
      });
  };

  const onLogOut = () => {
    const formData = new FormData();
    formData.append('data', JSON.stringify([{ "user_id": userId, 'jwt_token': accessToken }]));
    Logout_Api(formData, onLogoutResponse, onLogoutError)
  }

  const onLogoutResponse = (data) => {
    setLoading(false)
    console.log('onResponse---', data.id);
    Toast.show({
      type: 'success',
      position: 'top',
      text1: data.message,
    });
  }
  const onLogoutError = (e) => {
    setLoading(false)
    console.warn('onError--', e);
  }

  return (
    <>
      <ImageBackground
        source={IMAGE.profileBgImage}
        resizeMode="stretch"
        style={styles.bgImg}>
        <GlobalHeader
          mainContainer={{ paddingHorizontal: HP_WP.wp(5) }}
          light
          title={t('profile')}
          headerTitles={styles.headerText}
        />
        <StatusBar backgroundColor={COLORS.white} barStyle={'light-content'} />
        <View style={styles.mainContainer}>
          <View style={{ alignSelf: 'center' }}>
            <Image source={{ uri: userData?.additionalUserInfo?.profile?.picture?.data?.url }} style={styles.profileImg} />
            <TouchableOpacity
              style={styles.imageEdit}
              onPress={() => setModalVisible(true)}>
              <Icon name={'edit'} size={15} color={COLORS.purple} />
            </TouchableOpacity>
            <Text style={styles.nameText}>{userData?.user?.displayName}, 22</Text>
          </View>
        </View>
      </ImageBackground>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <View style={styles.accountSettingsContainer}>
              <Text style={styles.accountSettings}>{t('accountSettings')}</Text>
              <Text
                style={styles.edit}
                onPress={() => navigation.navigate('ProfileEdit')}>
                {t('edit')}
              </Text>
            </View>
            <GlobalInput
              placeholder={userData?.user?.displayName}
              inputName
              label={t('name')}
              editable={false}
              inputStyle={{ marginTop: 10 }}
            />
            <GlobalInput
              placeholder={userData?.user?.phoneNumber ? userData?.user?.phoneNumber : '1234567890'}
              inputName
              label={t('phoneNumber')}
              inputStyle={{ marginTop: 10 }}
              editable={false}
            />
            <GlobalInput
              placeholder={'02-05-1997'}
              inputName
              label={t('dob')}
              inputStyle={{ marginTop: 10 }}
              editable={false}
            />
            <GlobalInput
              placeholder={userData?.user?.email}
              inputName
              label={t('email')}
              inputStyle={{ marginTop: 10 }}
              editable={false}
            />
            <Text style={[styles.accountSettings, { marginTop: HP_WP.hp(2) }]}>
              {t('planSettings')}
            </Text>
            <GlobalInput
              editable={false}
              text={true}
              icon={true}
              inputName={true}
              label={t('currentPlan')}
              tuchText={t('free')}
              inputStyle={{ marginTop: 10 }}
              onPress={() => navigation.navigate('PlanSetting')}
            />
            <Text style={[styles.accountSettings, { marginTop: HP_WP.hp(2) }]}>
              {t('discoverySettings')}
            </Text>
            <GlobalInput
              editable={false}
              text={true}
              icon={true}
              inputName={true}
              label={t('location')}
              tuchText={t('currentLocation')}
              inputStyle={{ marginTop: 10 }}
            // onPress={() =>navigation.navigate('PlanSetting')}
            />
            <View style={styles.dropDownView}>
              <Text style={styles.dropDownTitle}>{t('preferredLanguages')}</Text>
              <Dropdown
                iconStyle={{ tintColor: COLORS.blue }}
                style={[styles.dropdawn]}
                data={languageList}
                maxHeight={240}
                labelField="name"
                valueField="name"
                value={languageName}
                placeholder={"Select language"}
                placeholderStyle={styles.dropDownText}
                selectedTextStyle={styles.dropDownText}
                onChange={item => {
                  setLanguageName(item.name);
                }}
              />
            </View>
            <TouchableOpacity
              onPress={() => setMarriage(!marriage)}
              style={styles.marriageContainer}>
              <Text style={styles.dropDownTitle}>{t('marriage')}</Text>
              <View
                style={[
                  styles.marriageIconContainer,
                  {
                    backgroundColor: marriage ? COLORS.purple : COLORS.white,
                    borderColor: marriage ? COLORS.white : COLORS.purple,
                  },
                ]}>
                {marriage && (
                  <Icon name={'done'} size={15} color={COLORS.white} />
                )}
              </View>
            </TouchableOpacity>
            <View style={[styles.ageRangeMainContainer]}>
              <View style={styles.ageRangeContainer}>
                <Text style={styles.dropDownTitle}>{t('ageRange')}</Text>
                <Text>
                  {minAgeSelected}-{maxAgeSelected}
                </Text>
              </View>
              <MultiSlider
                sliderLength={300}
                containerStyle={{
                  marginLeft: 2,
                  alignSelf: 'center',
                }}
                trackStyle={{
                  height: 3,
                  backgroundColor: '#CACACA',
                  borderRadius: 5,
                }}
                valuePrefix="age"
                values={[minAgeSelected, maxAgeSelected]}
                onValuesChange={value => onChange(value)}
                selectedStyle={{
                  backgroundColor: COLORS.purple,
                }}
                markerStyle={{
                  backgroundColor: COLORS.purple,
                  top: 0.8
                }}
                step={1}
                isMarkersSeparated={true}
                min={18}
                max={70}
                allowOverlap
              />
            </View>
            <TouchableOpacity
              onPress={() => setGroupChat(!groupChat)}
              style={styles.marriageContainer}>
              <Text style={styles.dropDownTitle}>{t('groupChats')}</Text>
              <View
                style={[
                  styles.marriageIconContainer,
                  {
                    backgroundColor: groupChat ? COLORS.purple : COLORS.white,
                    borderColor: groupChat ? COLORS.white : COLORS.purple,
                  },
                ]}>
                {groupChat && (
                  <Icon name={'done'} size={15} color={COLORS.white} />
                )}
              </View>
            </TouchableOpacity>
            {groupChat && (
              <View style={styles.ageRangeMainContainer}>
                <TouchableOpacity
                  onPress={() => setMale(!male)}
                  style={styles.ageRangeContainer}>
                  <Text style={styles.dropDownTitle}>{t('male')}</Text>
                  <View
                    style={[
                      styles.marriageIconContainer,
                      {
                        backgroundColor: male ? COLORS.purple : COLORS.white,
                        borderColor: male ? COLORS.white : COLORS.purple,
                      },
                    ]}>
                    {male && (
                      <Icon name={'done'} size={15} color={COLORS.white} />
                    )}
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setFemale(!female)}
                  style={styles.ageRangeContainer}>
                  <Text style={styles.dropDownTitle}>{t('female')}</Text>
                  <View
                    style={[
                      styles.marriageIconContainer,
                      {
                        backgroundColor: female ? COLORS.purple : COLORS.white,
                        borderColor: female ? COLORS.white : COLORS.purple,
                      },
                    ]}>
                    {female && (
                      <Icon name={'done'} size={15} color={COLORS.white} />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            )}

            <TouchableOpacity
              onPress={() => setNetwork(!network)}
              style={[
                styles.ageRangeContainer,
                {
                  borderColor: COLORS.light,
                  borderWidth: 0.8,
                  marginTop: 15,
                },
              ]}>
              <Text style={styles.dropDownTitle}>{t('network')}</Text>
              <View
                style={[
                  styles.marriageIconContainer,
                  {
                    backgroundColor: network ? COLORS.purple : COLORS.white,
                    borderColor: network ? COLORS.white : COLORS.purple,
                  },
                ]}>
                {network && <Icon name={'done'} size={15} color={COLORS.white} />}
              </View>
            </TouchableOpacity>
            <View style={styles.ageRangeMainContainer}>
              <View style={[styles.ageRangeContainer]}>
                <Text style={styles.dropDownTitle}>{t('maximumDistance')}</Text>
                <Text>
                  {distance}
                  {t('km')}
                </Text>
              </View>

              <MultiSlider
                sliderLength={300}
                containerStyle={{
                  marginLeft: 2,
                  alignSelf: 'center',
                }}
                trackStyle={{
                  height: 3,
                  backgroundColor: '#CACACA',
                  borderRadius: 5,
                }}
                valuePrefix="age"
                values={distance}
                onValuesChange={(v)=>setDistance(v[0])}
                selectedStyle={{
                  backgroundColor: COLORS.purple,
                }}
                markerStyle={{
                  backgroundColor: COLORS.purple,
                  top: 0.8
                }}
                min={0.2}
                max={50}
                type="slider" // ios only
              />
            </View>
            <View>
              <GlobalButton
                onPress={() => onLogOut()}
                Style={[styles.buttonStyle, { marginVertical: 15 }]}
                textStyle={{ color: COLORS.black }}
                title={t('logout')}
              />

              <GlobalButton
                Style={[styles.buttonStyle, { marginBottom: 15 }]}
                textStyle={{ color: COLORS.orange }}
                title={t('deleteAccount')}
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
                <Text style={styles.textStyle}>{t('fromCamera')}</Text>
              </Pressable>
              <Pressable style={styles.button} onPress={chooseFromGallery}>
                <Text style={styles.textStyle}>{t('fromGallery')}</Text>
              </Pressable>
              <Pressable
                style={[styles.button, { backgroundColor: COLORS.orange }]}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>{t('cancle')}</Text>
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
      </SafeAreaView>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  bgImg: {
    paddingTop: 50
  },
  linearGradient: {
    flex: 1,
    flexGrow: 1,
  },
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
    textAlign: 'center',
    fontFamily: Font.medium,
    fontSize: SIZE.N,
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
  dropdawn: {
    paddingHorizontal: 16,
    height: 40,
    width: '30%',
  },
  dropDownText: {
    fontSize: SIZE.N,
    color: COLORS.blue,
    fontFamily: Font.medium,
    textTransform:'uppercase'
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
    width: '70%',
    color: COLORS.black,
    fontSize: SIZE.N,
    fontFamily: Font.medium,
  },
  marriageContainer: {
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
  },
  marriageIconContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ageRangeMainContainer: {
    borderColor: COLORS.light,
    borderWidth: 0.8,
    marginTop: 15,
    borderRadius: 4,
  },
  ageRangeContainer: {
    height: HP_WP.hp(5),
    width: HP_WP.wp(92),
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  buttonStyle: {
    borderColor: COLORS.gray,
    width: HP_WP.wp(90),
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 5,
  },
});