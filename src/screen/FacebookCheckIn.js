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

const FacebookCheckIn = () => {
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);

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

  // useEffect(() => {
  //   fetchNearbyPlaces();
  // }, []);

  const fetchNearbyPlaces = async () => {
    try {
      const accessToken = await AccessToken.getCurrentAccessToken();
      const request = new GraphRequest(
        '/search',
        {
          parameters: {
            type: { string: 'place' },
            center: { string: '37.7749,-122.4194' }, // Latitude and longitude of the center point
            distance: { string: '1000' }, // Distance in meters
            fields: { string: 'id,name,location' }, // Fields to retrieve
          },
          accessToken: accessToken.accessToken,
        },
        (error, result) => {
          if (error) {
            console.warn('Error fetching nearby places:', error);
          } else {
            console.warn('Nearby places:', result.data);
            // Handle the retrieved places
          }
        }
      );
  
      new GraphRequestManager().addRequest(request).start();
    } catch (error) {
      console.warn('Error fetching nearby places:', error);
    }
  };
  
  // Call the fetchNearbyPlaces function to retrieve nearby places
  fetchNearbyPlaces();
  
  


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Nearby Places:</Text>
      {places.map((place) => (
        <Text key={place.id}>{place.name}</Text>
      ))}
    </View>
    // <Container>
    //   <GlobalHeader title={t('match')} mainContainer={styles.header} />
    //   <View style={{ flex: 1 }}>
    //     <Text style={styles.likeText}>{t('matches')}</Text>
    //     <FlatList
    //       style={styles.flatList}
    //       showsVerticalScrollIndicator={false}
    //       data={dataList}
    //       numColumns={2}
    //       renderItem={({ item }) => (
    //         <TouchableOpacity
    //           // onPress={() => trytochat(item.blurRadius)}
    //           style={styles.imageContainer}>
    //           <Image
    //             blurRadius={item.blurRadius}
    //             source={item.img}
    //             style={styles.imageStyle}
    //           />
    //           <View style={styles.imageLineContainer}>
    //             <View style={styles.imageLine} />
    //             <View style={styles.imageBottomLine} />
    //           </View>
    //         </TouchableOpacity>
    //       )}
    //     />
    //   </View>
    //   <Spinner
    //     color={COLORS.purple}
    //     visible={loading}
    //     size="large"
    //     overlayColor="rgba(0,0,0,0.5)"
    //   />
    // </Container>
  );
};

export default FacebookCheckIn;

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
