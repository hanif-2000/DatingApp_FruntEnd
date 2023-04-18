import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Container from '../comman/Container';
import {COLORS, HP_WP, SIZE} from '../comman/theme';
import GlobalHeader from '../comman/GlobalHeader';

const PlanSetting = () => {
  return (
    <Container Style={styles.mainContainer}>
      <GlobalHeader title={'Manage Subscription'} />
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
            <Text>Unsubscribe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Upgrade}>
            <Text>Upgrade</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.topCardContainer}></View>
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
  },
  free: {
    color: COLORS.lightGray,
    fontSize: SIZE.N,
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginTop: 30,
  },
  Unsubscribe: {
    width: HP_WP.wp(37),
    borderWidth: 0.8,
    borderColor: COLORS.mediumGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height:HP_WP.hp(4)
  },
  Upgrade: {
    width: HP_WP.wp(37),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height:HP_WP.hp(4),
    backgroundColor:COLORS.purple
  },
});
