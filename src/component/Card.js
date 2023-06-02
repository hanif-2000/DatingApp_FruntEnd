import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, Font, HP_WP, SIZE } from '../common/theme';

const Card = ({ card }) => (
  <View style={styles.card}>

    <Image style={styles.image} source={require('../assets/images/videoCallImage.png')} resizeMode="cover" />
    {/* <Image style={styles.image} source={{uri:card.file}} resizeMode="cover" /> */}
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.name} , ${card?.age}`}</Text>
      <Text style={styles.text2}>{`${card?.miles ? card?.miles : 1}`} miles</Text>
    </View>
  </View>
);
export default Card;

const styles = StyleSheet.create({
  card: {
    top: HP_WP.hp(-5),
  },
  image: {
    borderRadius: 30,
    width: '100%',
    height: HP_WP.hp(75),
  },
  photoDescriptionContainer: {
    position: 'absolute',
    left: 40,
    bottom: 80,
  },
  text: {
    fontSize: SIZE.XL,
    color: COLORS.white,
    fontFamily: Font.bold,
  },
  text2: {
    fontSize: SIZE.N,
    color: COLORS.white,
    fontFamily: Font.medium,
    marginTop: 5,
  },
});
