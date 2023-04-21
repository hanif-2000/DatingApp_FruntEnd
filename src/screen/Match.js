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
      <GlobalHeader
        title={'Match'}
        mainContainer={{paddingHorizontal: HP_WP.wp(5)}}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: SIZE.L,
            fontWeight: '500',
            paddingLeft: HP_WP.wp(5),
            color: COLORS.black,
            fontFamily: Font.semiBold,
          }}>
          7 Match
        </Text>
        <FlatList
          style={{marginHorizontal: HP_WP.wp(2.5)}}
          showsVerticalScrollIndicator={false}
          data={dataList}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              // onPress={() => trytochat(item.blurRadius)}
              style={{
                marginHorizontal: HP_WP.wp(2.5),
                marginVertical: 5,
              }}>
              <Image
                source={item.img}
                style={[
                  {
                    width: HP_WP.wp(42.5),
                    height: HP_WP.hp(26),
                    resizeMode: 'cover',
                    borderRadius: 12,
                  },
                ]}
              />
              <View
                style={{
                  flexDirection: 'column',
                  position: 'absolute',
                  bottom: '5%',
                  left: '15%',
                }}>
                <View
                  style={{
                    height: 4,
                    width: 30,
                    marginVertical: 5,
                    backgroundColor: '#fff',
                  }}
                />
                <View
                  style={{
                    height: 3,
                    width: 25,
                    marginVertical: 5,
                    backgroundColor: '#9e9e9e',
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </Container>
  );
};

export default Match;

const styles = StyleSheet.create({});
