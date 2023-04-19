import React from 'react'
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Container from '../comman/Container'
import GlobalHeader from '../comman/GlobalHeader'
import { COLORS, IMAGE } from '../comman/theme'
import { Image } from 'react-native-elements'
import GlobalButton from '../comman/GlobalButton'

const LikeScreen = ({ navigation }) => {
  const dataList = [
    {
      img: IMAGE.VideoCall,
      blurRadius: 0
    },
    {
      img: IMAGE.VideoCall,
      blurRadius: 4
    },
    {
      img: IMAGE.VideoCall,
      blurRadius: 4
    },
    {
      img: IMAGE.VideoCall,
      blurRadius: 4
    }, {
      img: IMAGE.VideoCall,
      blurRadius: 0
    },
  ]

  const trytochat = (type) => {
    if (type == 0) {
      navigation.navigate('FitMatch')
    }
  }
  return (
    <Container >
      <GlobalHeader title={'Like'} />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 18, fontWeight: '500', paddingLeft: 10 }}>7 Likes</Text>
        <FlatList data={dataList} numColumns={2} renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => trytochat(item.blurRadius)} >
            <Image
              blurRadius={item.blurRadius}
              source={item.img}
              style={[{
                width: 190,
                height: 190,
                resizeMode: 'cover',
                marginVertical: 5,
                borderRadius: 5
              }]} />
            <View style={{ flexDirection: 'column', position: 'absolute', bottom: '5%', left: '15%' }}>
              <View style={{ height: 4, width: 30, marginVertical: 5, backgroundColor: '#fff', }} />
              <View style={{ height: 3, width: 25, marginVertical: 5, backgroundColor: '#9e9e9e', }} />

            </View>

          </TouchableOpacity>
        )}
        />
        <GlobalButton Style={{ backgroundColor: '#EEAF51', marginBottom: 10 }} title={"SEE WHO LIKES YOU"} />
      </View>


    </Container>
  )
}

export default LikeScreen

const styles = StyleSheet.create({})