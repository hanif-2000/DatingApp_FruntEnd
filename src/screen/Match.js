import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import {Image} from 'react-native-elements';

const Match = () => {
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
  return (
    <Container>
      <GlobalHeader title={'Match'} mainContainer={styles.header} />
      <View style={{flex: 1}}>
        <Text style={styles.likeText}>7 Match</Text>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={dataList}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => trytochat(item.blurRadius)}
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
