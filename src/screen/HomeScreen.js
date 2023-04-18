import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../comman/Container'
import GlobalHeader from '../comman/GlobalHeader'
import { COLORS, IMAGE } from '../comman/theme'

const HomeScreen = () => {
  const dataList = [
    {
      img: IMAGE.Profile,
      blurRadius: 4
    },
    {
      img: IMAGE.Profile,
      blurRadius: 0
    },
    {
      img: IMAGE.Profile,
      blurRadius: 4
    },
    {
      img: IMAGE.Profile,
      blurRadius: 4
    }, {
      img: IMAGE.Profile,
      blurRadius: 4
    },
  ]


  return (
    <Container>
      <GlobalHeader title={'Matches'} />
      <View style={{ padding: 5, }}>
        <Text style={{ paddingLeft: 15, fontSize: 18, color: COLORS.black }}>7 Matches</Text>

        <View style={{ width: '100%' }}>
          <FlatList
            data={dataList}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={{ height: 200, width: '48%', margin: 5, backgroundColor: '#fff' }}>
                <Image
                  blurRadius={item.blurRadius}
                  source={IMAGE.VideoCall}
                  style={{ width: '100%', height: 200 }}
                />
              </View>

            )}
          />
        </View>
      </View>
    </Container>
  )
}

export default HomeScreen

