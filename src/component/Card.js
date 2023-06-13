import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { COLORS, Font, HP_WP, SIZE } from '../common/theme';
import IconButton from '../component/IconButton';

const Card = ({ card, onSwipedLeft, onSwipedRight }) => (
  <>
    <View style={styles.card}>
      {/* <Image style={styles.image} source={require('../assets/images/videoCallImage.png')} resizeMode="cover" /> */}
      <Image style={styles.image} source={{ uri: card.profile_url }} resizeMode="cover" />
      <View style={styles.photoDescriptionContainer}>
        <Text style={styles.text}>{`${card.name} , ${card?.age}`}</Text>
        <Text style={styles.text2}>{`${card?.Miles}`}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={{ width: '35%' }}>
          <IconButton
            name="close"
            onPress={onSwipedLeft}
            color={COLORS.white}
            backgroundColor={COLORS.red}
            type="AntDesign"
          />
        </View>
        <View style={{ width: '35%' }}>
          <IconButton
            name="dollar"
            onPress={() => navigation.navigate('PlanSetting')}
            color={COLORS.white}
            backgroundColor={COLORS.yellow}
            type="fontisto"
          />
        </View>
        <View style={{ width: '35%' }}>
          <IconButton
            name="heart"
            onPress={() => onSwipedRight(card.id)}
            color={COLORS.white}
            backgroundColor={COLORS.purple}
            type="entypo"
          />
        </View>
      </View>
    </View>

  </>
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
    fontWeight: '700'
  },
  buttonsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    left: '5%'
  },
});
