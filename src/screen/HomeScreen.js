import React, {useRef, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import {BottomSheet} from 'react-native-sheet';
import {Dropdown} from 'react-native-element-dropdown';
// import RangeSlider from '@jesster2k10/react-native-range-slider';

import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import Card from '../component/Card';
import IconButton from '../component/IconButton';
import {COLORS, HP_WP, IMAGE, SIZE} from '../common/theme';
import photoCards from '../component/photoCards';
import {Font} from '../common/theme';

const HomeScreen = ({navigation}) => {
  const [gender, setGender] = useState('male');
  const [minSelected, setMinSelected] = useState(0);
  const [maxSelected, setMaxSelected] = useState(0);

  const data = [
    {label: '0 km-10 km', value: '1'},
    {label: '10 km-20 km', value: '2'},
    {label: '20 km-30 km', value: '3'},
    {label: '30 km-40 km', value: '4'},
    {label: '40 km-50 km', value: '5'},
    {label: '50 km-60 km', value: '6'},
    {label: '60 km-70 km', value: '7'},
    {label: '70 km-80 km', value: '8'},
  ];

  const onChange = (min, max) => {
    setMinSelected(min);
    setMaxSelected(max);
  };

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const bottomSheet = useRef(null);

  const onSwipedLeft = type => {
    this.swiper.swipeLeft(type);
  };

  const onSwipedRight = type => {
    this.swiper.swipeRight(type);
  };
  return (
    <Container>
      <GlobalHeader
        withoutIcon={true}
        logo={true}
        rightImage={true}
        mainContainer={{paddingHorizontal: HP_WP.wp(5)}}
        rightIcon={require('../assets/images/filter.png')}
        onPressRight={() => bottomSheet.current?.show()}
      />
      <View style={{height: HP_WP.hp(73)}}>
        <Swiper
          style={{height: HP_WP.hp(65)}}
          ref={swiper => {
            this.swiper = swiper;
          }}
          verticalSwipe={false}
          backgroundColor={COLORS.white}
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
          color={COLORS.white}
          backgroundColor={COLORS.red}
          type="AntDesign"
        />
        <IconButton
          name="dollar"
          onPress={() => navigation.navigate('PlanSetting')}
          color={COLORS.white}
          backgroundColor={COLORS.yellow}
          type="fontisto"
        />
        <IconButton
          name="heart"
          onPress={() => onSwipedRight('right')}
          color={COLORS.white}
          backgroundColor={COLORS.purple}
          type="entypo"
        />
      </View>

      <BottomSheet
        backdropBackgroundColor="rgba(0,0,0,0.5)"
        draggable={false}
        sheetStyle={styles.sheet}
        height={350}
        ref={bottomSheet}>
        <GlobalHeader
          title={'Filter'}
          rightImage={true}
          rightIcon={IMAGE.check}
          drawerPress
          onPressRight={() => bottomSheet.current?.hide()}
          onPress={() => bottomSheet.current?.hide()}
        />
        <View style={styles.sheetContainer}>
          <Text style={styles.distanceText}>Distance</Text>

          <Dropdown
            style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.placeholderStyle}
            // inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            // search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Select Distance' : 'Select Distance'}
            // searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
          />

          <Text style={styles.distanceText}>Gender</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => setGender('male')}
              style={[gender == 'male' ? styles.activeButton : styles.button]}>
              <Text
                style={[
                  styles.buttonText,
                  {color: gender == 'male' ? COLORS.white : COLORS.light},
                ]}>
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender('female')}
              style={[
                gender == 'female' ? styles.activeButton : styles.button,
                {
                  borderLeftWidth: gender == 'male' ? 0 : 1,
                  borderRightWidth: gender == 'shemale' ? 0 : 1,
                },
              ]}>
              <Text
                style={[
                  styles.buttonText,
                  {color: gender == 'female' ? COLORS.white : COLORS.light},
                ]}>
                Female
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setGender('shemale')}
              style={gender == 'shemale' ? styles.activeButton : styles.button}>
              <Text
                style={[
                  styles.buttonText,
                  {color: gender == 'shemale' ? COLORS.white : COLORS.light},
                ]}>
                Shemale
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.distanceText}>Age</Text>
        </View>
        {/* <RangeSlider
        style={{marginTop:10}}
          type="range" // ios only
          min={18}
          max={70}
          selectedMinimum={22} // ios only
          selectedMaximum={44} // ios only
          tintColor="#000"
          handleColor="#f368e0"
          handlePressedColor="#f368e0"
          tintColorBetweenHandles="#ff9ff3"
          onChange={(min, max) => onChange(min, max)}
        /> */}
      </BottomSheet>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  sheet: {
    position: 'absolute',
    top: 0,
    paddingTop: 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: COLORS.white,
    height: 325,
    paddingHorizontal: HP_WP.wp(5),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sheetContainer: {
    marginHorizontal: 25,
  },
  distanceText: {
    color: COLORS.black,
    fontSize: SIZE.L,
    fontFamily: Font.medium,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 12,
  },
  button: {
    width: '33%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftColor: COLORS.gray,
    borderRightColor: COLORS.gray,
  },
  buttonText: {
    color: COLORS.gray,
    fontSize: SIZE.N,
    fontFamily:Font.regular
  },
  activeButton: {
    backgroundColor: COLORS.purple,
    width: '34%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButtonText: {
    color: COLORS.white,
    fontSize: SIZE.N,
    fontFamily: Font.regular,
  },
  dropdown: {
    height: 34,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 10,
  },
  placeholderStyle: {
    fontSize: SIZE.N,
    color: COLORS.darkGray,
    fontFamily: Font.regular,
  },
  iconStyle: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
});
