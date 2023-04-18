import React from 'react'
import { View, Text, Image, ImageSourcePropType,StyleSheet, Dimensions } from 'react-native'
import { shape, string, number } from 'prop-types'
import { COLORS } from '../comman/theme'

const { height } = Dimensions.get('window')

const Card = ({ card }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={card.photo}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}, ${card.age}`}
      </Text>
    </View>
  </View>
)

Card.propTypes = { 
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
}
export default Card;

const styles = StyleSheet.create({
    card: {
        height: height - 300,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
      image: {
        borderRadius: 5,
        flex: 1,
        width: '100%',
      },
      photoDescriptionContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        flexDirection: 'column',
        height: '100%',
        position: 'absolute',
        left: 10,
        bottom: 10,
      },
      text: {
        textAlign: 'center',
        fontSize: 20,
        color: COLORS.white,
        fontFamily: 'Avenir',
        textShadowColor: COLORS.black,
        textShadowRadius: 10,
      },
})