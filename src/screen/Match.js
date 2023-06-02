import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { t } from 'i18next';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Toast from 'react-native-toast-message';

import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk-next';


import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import { COLORS, Font, HP_WP, IMAGE, SIZE } from '../common/theme';

const Match = () => {
  const [loading, setLoading] = useState(false);

  const dataList = [
    {
      img: IMAGE.VideoCall,
    },
    {
      img: IMAGE.VideoCall,
    },
    {
      img: IMAGE.VideoCall,
    },
    {
      img: IMAGE.VideoCall,
    },
    {
      img: IMAGE.VideoCall,
    },
  ];

  useEffect(() => {
    setLoading(true)
    handleFacebookLogin()
  }, [])
  const handleFacebookLogin = async () => {
    try {
      const accessToken = await AccessToken.getCurrentAccessToken();
      if (accessToken) {
        // Make a Graph API request to get the nearby friends
        const request = new GraphRequest(
          '/me/friends',
          {
            httpMethod: 'GET',
            version: 'v12.0',
            fields: { name: 'babu', location: 'merta city' },
            // limit: { string: '10' },
            accessToken: accessToken,
          },
          (error, result) => {
            if (error) {
              setLoading(false)
              console.log('Error retrieving nearby friends:', error);
            } else {
              setLoading(false)
              Alert.alert(`Nearby friends: ${!result.data ? result.data : 0} Total friends${result.summary.total_count}`)
              console.warn('Nearby friends:', result);
            }
          }
        );
        // Execute the Graph API request
        new GraphRequestManager().addRequest(request).start();
      }

    } catch (error) {
      setLoading(false)
      console.log('Error logging in with Facebook:', error);
    }
  };

  return (
    <Container>
      <GlobalHeader title={t('match')} mainContainer={styles.header} />
      <View style={{ flex: 1 }}>
        <Text style={styles.likeText}>{t('matches')}</Text>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={dataList}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              // onPress={() => trytochat(item.blurRadius)}
              style={styles.imageContainer}>
              <Image
                blurRadius={item.blurRadius}
                source={item.img}
                style={styles.imageStyle}
              />
              <View style={styles.imageLineContainer}>
                <View style={styles.imageLine} />
                <View style={styles.imageBottomLine} />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size="large"
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Container>
  );
};

export default Match;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: HP_WP.wp(5),
  },
  likeText: {
    fontSize: SIZE.L,
    marginLeft: HP_WP.wp(5),
    color: COLORS.black,
    fontFamily: Font.semiBold,
    marginTop: 20,
  },
  flatList: {
    marginHorizontal: HP_WP.wp(2.5),
    marginVertical: 6,
  },
  imageContainer: {
    marginHorizontal: HP_WP.wp(2.5),
    marginVertical: 5,
  },
  imageStyle: {
    width: HP_WP.wp(42.5),
    height: HP_WP.hp(26),
    resizeMode: 'cover',
    borderRadius: 12,
  },
  imageLineContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: '5%',
    left: '15%',
  },
  imageLine: {
    height: 4,
    width: 30,
    marginVertical: 5,
    backgroundColor: COLORS.white,
  },
  imageBottomLine: {
    height: 3,
    width: 25,
    marginVertical: 5,
    backgroundColor: COLORS.gray,
  },
});
