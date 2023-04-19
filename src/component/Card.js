import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {shape, string, number} from 'prop-types';
import {COLORS, Font, HP_WP, SIZE} from '../comman/theme';

const {height} = Dimensions.get('window');

const Card = ({card}) => (
  <View style={styles.card}>
    <Image style={styles.image} source={card.photo} resizeMode="contain" />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
    </View>
  </View>
);

Card.propTypes = {
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
};
export default Card;

const styles = StyleSheet.create({
  card: {
    height: HP_WP.hp(70),
    borderRadius: 10,
    top: HP_WP.hp(-3),
  },
  image: {
    borderRadius: 10,
    width: HP_WP.wp(90),
    flex: 1,
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
