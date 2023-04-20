
import React, { useRef } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { BottomSheet } from 'react-native-sheet';

import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import Card from '../component/Card';
import IconButton from '../component/IconButton';
import { COLORS, HP_WP } from '../common/theme';
import PhotoCards from '../component/PhotoCards';

const HomeScreen = ({ navigation }) => {
  const bottomSheet = useRef(null);
  
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
        onPressRight={() => bottomSheet.current?.show()}
      />
      <View style={{ flex: 1,backgroundColor: '#fff' }}>
        <Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          verticalSwipe={false}
          backgroundColor='#fff'
          animateCardOpacity
          cards={PhotoCards}
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

      <View >
        <BottomSheet
          draggable={false}
          sheetStyle={{ position: 'absolute', top: 0, paddingTop: 50 }}
          height={400}
          ref={bottomSheet}>
          <Text>sheetStyle</Text>
        </BottomSheet>
      </View>

    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom:10
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
