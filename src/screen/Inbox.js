import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';

const ChatScreen = ({navigation}) => {
  const DATA = [1, 2, 3, 4];
  return (
    <Container Style={styles.mainContainer}>
      <GlobalHeader title={'Chat'} />
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ChattingScreen')}
            style={styles.flatListContainer}>
            <Image source={IMAGE.Profile} style={styles.profileImage} />
            <View style={styles.ProfileNameContainer}>
              <Text style={styles.silivaStyle}>Siliva</Text>
              <Text style={styles.hoarderStyle}>
                I’m not a hoarder but I really...
              </Text>
            </View>
            <Text style={styles.numberStyle}>11:30</Text>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: HP_WP.wp(5),
  },
  flatListContainer: {
    marginTop: HP_WP.hp(2.5),
    flexDirection: 'row',
    paddingTop: HP_WP.hp(2),
    alignItems: 'center',
  },
  profileImage: {
    resizeMode: 'contain',
    height: HP_WP.hp(6),
    width: HP_WP.wp(11),
  },
  silivaStyle: {
    color: COLORS.black,
    fontSize: SIZE.NL,
    fontFamily: Font.medium,
  },
  hoarderStyle: {
    color: COLORS.black,
    fontSize: SIZE.M,
    fontFamily: Font.regular,
  },
  ProfileNameContainer: {
    marginLeft: HP_WP.hp(1),
    flex: 1,
  },
  numberStyle: {
    color: COLORS.black,
    fontSize: SIZE.M,
    fontFamily: Font.regular,
    marginTop: HP_WP.hp(2.4),
  },
});
