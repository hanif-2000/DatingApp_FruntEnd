
import React, { useRef } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';

import Container from '../comman/Container';
import GlobalHeader from '../comman/GlobalHeader';
import photoCards from '../component/photoCards';
import Card from '../component/Card';
import IconButton from '../component/IconButton';
import { COLORS, HP_WP } from '../comman/theme';

const HomeScreen = ({navigation}) => {
  const useSwiper = useRef(null).current;

  const handleOnSwipedLeft = () => useSwiper.swipedLef('left');
  const handleOnSwipedTop = () => useSwiper.swipeTop('top');
  const handleOnSwipedRight = () => useSwiper.swipeRight('right');

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
          ref={useSwiper}
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
          onPress={() => handleOnSwipedLeft()}
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
          onPress={() => handleOnSwipedRight()}
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
  },
});
