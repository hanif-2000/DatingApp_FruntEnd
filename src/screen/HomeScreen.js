
import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import Swiper from 'react-native-deck-swiper';

import Container from '../comman/Container';
import GlobalHeader from '../comman/GlobalHeader';
import photoCards from '../component/photoCards';
import Card from '../component/Card';
import IconButton from '../component/IconButton';

const HomeScreen = () => {
  const useSwiper = useRef(null).current;

  const handleOnSwipedLeft = () => useSwiper.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.swipeTop();
  const handleOnSwipedRight = () => useSwiper.swipeRight();

  return (
    <Container >
      <GlobalHeader
        withoutIcon={true}
        logo={true}
        rightImage={true}
        rightIcon={require('../assets/images/filter.png')}
      />
      <View style={{flex: 0.88}}>
        <Swiper
          ref={useSwiper}
          backgroundColor='#F9F9F9'
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
          onPress={handleOnSwipedLeft}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={handleOnSwipedTop}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={handleOnSwipedRight}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {flexDirection: 'row', justifyContent: 'space-around',},
});
