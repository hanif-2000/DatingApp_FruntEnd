import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {COLORS, Font, HP_WP, SIZE} from '../comman/theme';


const Card = ({card}) => (
  <View style={styles.card}>
    <Image style={styles.image} source={card.photo} resizeMode='cover' />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
    </View>
  </View>
);
export default Card;

const styles = StyleSheet.create({
  card: {
    height: HP_WP.hp(65),
    borderRadius: 10,
    top: HP_WP.hp(-6),
    backgroundColor:'#fff' 
  },
  image: {
    borderRadius: 10,
    width: HP_WP.wp(90),
    height: HP_WP.hp(65),
  },
  photoDescriptionContainer: {
    position: 'absolute',
    left: 40,
    bottom: 40,
  },
  text: {
    fontSize: SIZE.XL,
    color: COLORS.white,
    fontFamily: Font.semiBold,
  },
});
