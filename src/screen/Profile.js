import {
  Alert,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import Container from '../comman/Container';
import GlobalHeader from '../comman/GlobalHeader';
import { COLORS, Font, HP_WP, IMAGE, SIZE } from '../comman/theme';
import { Icon } from 'react-native-elements';
import GlobalInput from '../comman/GlobalInput';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { BlurView } from "@react-native-community/blur";
import Spinner from 'react-native-loading-spinner-overlay';
import { Dropdown } from 'react-native-element-dropdown';

const Profile = ({ navigation }) => {
  const [nameOfFile, setNameOfFile] = useState(null)
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false)
  const [languageName, setLanguageName] = useState('English')
  const [preferredLanguages, setPreferredLanguages] = useState([
    {
      "id": 1,
      "name": "English"
    }, {
      id: 2,
      name: 'Hindi'
    }
  ])

  const [planName, setPlanName] = useState('Free')
  const [plan, setPlan] = useState([
    {
      "id": 1,
      "name": "Free"
    }, {
      id: 2,
      name: 'Basic'
    }
  ])
  const chooseFromGallery = () => {
    launchImageLibrary({ selectionLimit: 1, mediaType: "photo" })
      .then((images) => {
        setNameOfFile(images.assets[0]);
        setModalVisible(false)
      })
      .catch((e) => {
        setModalVisible(false)
      });
  };

  const chooseFromCamera = () => {
    launchCamera({ mediaType: "photo" })
      .then((image) => {
        setModalVisible(false)
        setNameOfFile(image.assets[0]);
      })
      .catch((e) => {
        setModalVisible(false)
      });
  };
  return (
    <Container>
      <ImageBackground
        source={IMAGE.profileBgImage}
        resizeMode="stretch"
        style={styles.bgImg}>
        <GlobalHeader
          light
          title={'Profile'}
          headerTitles={styles.headerText}
        />
        <View style={styles.mainContainer}>

          <View style={{ alignSelf: 'center' }}>
            <Image source={IMAGE.Profile} style={styles.profileImg} />
            <TouchableOpacity style={styles.imageEdit} onPress={() => setModalVisible(true)} >
              <Icon name={'edit'} size={15} color={'#AA3FEC'} />
            </TouchableOpacity>
            <Text style={styles.nameText}>Jenny, 22</Text>
          </View>
        </View>
      </ImageBackground>
      <ScrollView style={{}}>
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
            inputStyle={{ marginTop: 10 }}
            editable={false}
          />
          <GlobalInput
            placeholder={'+91 9876543210'}
            inputName
            label="Phone Number"
            inputStyle={{ marginTop: 10 }}
            editable={false}
          />
          <GlobalInput
            placeholder={'02-05-1997'}
            inputName
            label="Date of birth"
            inputStyle={{ marginTop: 10 }}
            editable={false}
          />
          <GlobalInput
            placeholder={'abcqwertyu@gmail.com'}
            inputName
            label="Email"
            inputStyle={{ marginTop: 10 }}
            editable={false}
          />
          <Text style={[styles.accountSettings, { marginTop: HP_WP.hp(2) }]}>
            Plan Settings
          </Text>
          <View style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, height: 40, flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 15 }}>
            <Text style={{ paddingLeft: 10, color: '#000', fontSize: 14, width: '70%', }}>
              Current Plan</Text>
            <Dropdown
              style={[{ paddingHorizontal: 16, height: 40, width: '30%', }]}
              data={plan}
              maxHeight={240}
              labelField="name"
              valueField="name"
              value={planName}
              onChange={item => {
                setPlanName(item.name)
              }}
            />
          </View>
          <Text style={[styles.accountSettings, { marginTop: HP_WP.hp(2) }]}>
            Discovery Settings
          </Text>
          <GlobalInput
            placeholder={'My Current Location'}
            inputName
            label="Location"
            inputStyle={{ marginTop: 10 }}
          />
          <View style={{ backgroundColor: '#fff', borderWidth: 1, borderRadius: 5, height: 40, flexDirection: 'row', width: '100%', alignItems: 'center', marginTop: 15 }}>
            <Text style={{ paddingLeft: 10, color: '#000', fontSize: 14, width: '70%', }}>Preferred Languages</Text>
            <Dropdown
              style={[{ paddingHorizontal: 16, height: 40, width: '30%', }]}
              data={preferredLanguages}
              maxHeight={240}
              labelField="name"
              valueField="name"
              value={languageName}
              onChange={item => {
                setLanguageName(item.name)
              }}
            />
          </View>
          <GlobalInput
            placeholder={'X'}
            inputName
            label="Marriage  (Opposite sex only)"
            inputStyle={{ marginTop: 10 }}
          />
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(false);
        }}
      >
        <BlurView
          style={styles.blurView}
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor={COLORS.white}
        />
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.button}
              onPress={chooseFromCamera}
            >
              <Text style={styles.textStyle}>Take From Camera</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={chooseFromGallery}
            >
              <Text style={styles.textStyle}>Choose From Gallery</Text>
            </Pressable>
            <Pressable
              style={[styles.button, { backgroundColor: COLORS.orange }]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancle</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size='large'
        overlayColor='rgba(0,0,0,0.5)'
      />
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
  blurView: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
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
    width: "100%",
    backgroundColor: COLORS.purple
  },
  textStyle: {
    color: COLORS.white,
    fontWeight: "bold",
    textAlign: "center",
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
    marginRight:5
  },
});
