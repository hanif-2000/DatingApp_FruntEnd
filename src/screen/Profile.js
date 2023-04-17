import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Container from '../comman/Container';
import GlobalHeader from '../comman/GlobalHeader';
import {COLORS, HP_WP, IMAGE} from '../comman/theme';
import LinearGradient from 'react-native-linear-gradient';

const Profile = () => {
  return (
    <Container>
      <LinearGradient style={styles.linearGradientContainer}
        start={{x: 0, y: 0}}
        end={{x: .5, y: 0}}
        colors={['#000000','#AA3FEC']}>
        <GlobalHeader light title={'Profile'} headerTitles={styles.headerText} />
      </LinearGradient>
      <ScrollView>
      <LinearGradient style={styles.linearGradientContainer}
        start={{x: 0, y: 0}}
        end={{x: .5, y: 0}}
        colors={['#000000','#AA3FEC']}>
            <Image source={IMAGE.Profile}/>
      </LinearGradient>
      
        <View style={styles.accountSettingsContainer}>
        <Text>Account Settings</Text>
        <Text>Edit</Text>
        </View>
      </ScrollView>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
    linearGradientContainer:{
        paddingHorizontal:HP_WP.wp(5),
    },
  headerText: {
    color:COLORS.white
  },
  accountSettingsContainer:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
