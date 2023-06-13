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
import moment from 'moment';
import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import { COLORS, Font, HP_WP, SIZE } from '../common/theme';
import axios from 'axios';

const FacebookCheckIn = () => {
  const [loading, setLoading] = useState(false);
  const [places, setPlaces] = useState([]);
  const [date, setDate] = useState(null)
  const [expiryDate, setExpiryDate] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchPlaces();
  }, []);

  const fetchPlaces = async () => {
    let MY_API_KEY = 'AIzaSyDLLuDXQCVlz0JVMXAdU85eHfuzMUpjZWk'
    const location = '21.426220,78.716721'; // Replace with your desired latitude and longitude
    const radius = '10000';
    const type = 'mosque|temple';

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&types=${type}&key=${MY_API_KEY}`
      );
      const { results } = response.data;
      console.log(results);
      const currentDate = moment();
      const afterSevenDays = currentDate.add(7, 'days').format('DD-MM-YY');
      setDate(moment().format('DD-MM-YY'))
      setExpiryDate(afterSevenDays)
      setLoading(false)
      setPlaces(results);
    } catch (error) {
      setLoading(false)
      console.error('Error fetching nearby places:', error);
    }
  };




  return (
    <Container>
      <GlobalHeader title={t('match')} mainContainer={styles.header} />
      <View style={{ flex: 1 }}>
        {places && places?.length > 0 && (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={[styles.likeText, { marginLeft: HP_WP.wp(5) }]}>Check-In :{date}</Text>
            <Text style={[styles.likeText, { marginRight: HP_WP.wp(5) }]}>
              Expire on {expiryDate}
            </Text>
          </View>)}
        {
          places && places?.length <= 0 ?
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: COLORS.black, fontSize: 20, fontWeight: 'bold' }}>
                No Data Found
              </Text>
            </View>
            :
            <FlatList
              style={styles.flatList}
              showsVerticalScrollIndicator={false}
              data={places}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.imageContainer}>
                  <View style={{ flex: 1, flexDirection: 'row', borderWidth: 1, borderColor: COLORS.purple, alignItems: 'center', borderRadius: 10 }}>
                    <Image
                      resizeMode='contain'
                      source={{ uri: item.icon }}
                      style={styles.imageStyle}
                    />
                    <Text style={{ textAlign: 'center', color: COLORS.black, fontSize: 14, fontWeight: 'bold' }}>{item?.name}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
        }
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

export default FacebookCheckIn;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: HP_WP.wp(5),
  },
  likeText: {
    fontSize: SIZE.L,
    // marginLeft: HP_WP.wp(5),
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
    width: HP_WP.wp(20.5),
    height: HP_WP.hp(5),
    borderRadius: 12,
  },
  imageLineContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: '5%',
    left: '15%',
  },
  imageBottomLine: {
    height: 3,
    width: 25,
    marginVertical: 5,
    backgroundColor: COLORS.gray,
  },
});
