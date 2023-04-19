import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

import Container from '../comman/Container';
import {COLORS, HP_WP, SIZE} from '../comman/theme';
import GlobalHeader from '../comman/GlobalHeader';
import {Font} from '../comman/theme';
import {Icon} from 'react-native-elements';

const PlanSetting = () => {
  return (
    <Container Style={styles.mainContainer}>
      <GlobalHeader title={'Manage Subscription'} />
      <ScrollView>
        <View style={[styles.topCardContainer, {padding: 20}]}>
          <View style={styles.directionContainer}>
            <Text style={styles.currentPlan}>Current Plan</Text>
            <Text style={styles.free}>Free</Text>
          </View>
          <View style={[styles.directionContainer, {marginTop: 10}]}>
            <Text style={styles.currentPlan}>Time Period</Text>
            <Text style={styles.free}>12/04/2020 - 12/04/2021</Text>
          </View>
          <View style={[styles.directionContainer, styles.buttonContainer]}>
            <TouchableOpacity style={styles.Unsubscribe}>
              <Text style={styles.unsubscribeText}>Unsubscribe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Upgrade}>
              <Text style={[styles.unsubscribeText, {color: COLORS.white}]}>
                Upgrade
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topCardContainer}>
            
            

          <Text style={styles.bottomCardTopText}>Get Mingle Gold</Text>
          <LinearGradient
            start={{x: 1, y: 0.8}}
            end={{x: 0.1, y: 0.5}}
            colors={['#B44CF4', '#7A29AC']}
            style={styles.heartContainer}>
            <Icon name={'heart'} type="entypo" size={25} color={COLORS.white} />
          </LinearGradient>
          <Text style={styles.likesText}>Unlimited Likes</Text>
          <Text style={styles.manyLikes}>Send as many likes as you want</Text>
          <View style={styles.dotMainContainer}>
            <FlatList
              horizontal={true}
              data={[1, 2, 3, 4, 5]}
              renderItem={({item}) => (
                <TouchableOpacity style={styles.dotContainer} />
              )}
            />
          </View>
          <LinearGradient
            colors={['#EEAF51', '#B67718']}
            style={styles.bottomButtonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CONTINUE</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </Container>
  );
};

export default PlanSetting;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: HP_WP.wp(4),
  },
  topCardContainer: {
    borderRadius: 8,
    borderWidth: 0.8,
    borderColor: COLORS.gray,
    marginTop: HP_WP.hp(3),
  },
  directionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentPlan: {
    color: COLORS.black,
    fontSize: SIZE.NL,
    fontFamily: Font.semiBold,
  },
  free: {
    color: COLORS.lightGray,
    fontSize: SIZE.N,
    fontFamily: Font.light,
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginTop: 40,
    marginBottom: 20,
  },
  Unsubscribe: {
    width: HP_WP.wp(37),
    borderWidth: 0.8,
    borderColor: COLORS.mediumGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: HP_WP.hp(4.5),
  },
  Upgrade: {
    width: HP_WP.wp(37),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height: HP_WP.hp(4.5),
    backgroundColor: COLORS.purple,
  },
  unsubscribeText: {
    color: COLORS.black,
    fontSize: SIZE.M,
    fontFamily: Font.medium,
  },
  bottomCardTopText: {
    marginTop: 20,
    textAlign: 'center',
  },
  heartContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesText: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: SIZE.XL,
    fontFamily: Font.medium,
  },
  manyLikes: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: SIZE.M,
    fontFamily: Font.light,
    marginVertical: 10,
  },
  dotMainContainer: {
    marginVertical: 10,
    alignSelf: 'center',
    flex: 1,
  },
  dotContainer: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
  },
  bottomButtonContainer: {
    borderRadius: 30,
    height: HP_WP.hp(5.5),
    width: HP_WP.wp(75),
    alignSelf: 'center',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: SIZE.NL,
    fontFamily: Font.semiBold,
  },
  textt: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
