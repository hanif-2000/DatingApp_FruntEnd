
import React, { useRef } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import Card from '../component/Card';
import IconButton from '../component/IconButton';
import { COLORS, HP_WP } from '../common/theme';
import photoCards from '../component/photoCards';

const HomeScreen = ({ navigation }) => {
  // const useSwiper = useRef(null).current;


  const onSwipedLeft = (type) => {
    this.swiper.swipeLeft(type)
  }

  const onSwipedRight = (type) => {
    this.swiper.swipeRight(type)
  }
  return (
    <Container >
      <GlobalHeader
        withoutIcon={true}
        logo={true}
        rightImage={true}
        mainContainer={{ paddingHorizontal: HP_WP.wp(5) }}
        rightIcon={require('../assets/images/filter.png')}
      />
      <View style={{ flex: 0.88, backgroundColor: '#fff' }}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          verticalSwipe={false}
          backgroundColor='#fff'
          animateCardOpacity
          cards={photoCards}
          renderCard={card => <Card card={card} />}
          cardIndex={0}
          stackSize={2}
          infinite
          showSecondCard
          animateOverlayLabelsOpacity
        />
      </View>

      <View style={styles.buttonsContainer}>
        <IconButton
          name="close"
          onPress={() => onSwipedLeft('left')}
          color="white"
          backgroundColor="#E5566D"
          type='AntDesign'
        />
        <IconButton
          name="dollar"
          onPress={() => navigation.navigate('PlanSetting')}
          color="white"
          backgroundColor="#FFD912"
          type='fontisto'
        />
        <IconButton
          name="heart"
          onPress={() => onSwipedRight('right')}
          color="white"
          backgroundColor={COLORS.purple}
          type='entypo'
        />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff'
  },
});
