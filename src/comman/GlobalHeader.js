import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from './theme';
import {useNavigation} from '@react-navigation/native';

const GlobalHeader = ({
  title,
  rightIcon,
  rightImage,
  onPressRight,
  rightIconStyle,
  drawer = false,
  headerTitles,
  light,
  withoutIcon,
  disabled,
  logo,
  mainContainer
}) => {
  let Route = useNavigation();
  return (
    <View style={[styles.mainContainer,mainContainer]}>
      <View style={{flex: 0.2, alignItems: 'flex-start'}}>
        <TouchableOpacity  disabled={disabled} onPress={() => Route.goBack()}>
          <Icon
            name={drawer ? 'menu' : withoutIcon ? '' : 'arrow-back'}
            type="ionicons"
            size={20}
            color={light ? '#fff' : COLORS.black}
          />
        </TouchableOpacity>
      </View>
      {logo ? (
        <Image source={IMAGE.logo2} style={styles.logo} />
      ) : (
        <Text style={[styles.titles, headerTitles]}>{title}</Text>
      )}
      <View style={{flex: 0.2}}>
        {rightImage && (
          <TouchableOpacity
            onPress={onPressRight}
            style={{alignSelf: 'flex-end'}}>
            <Image source={rightIcon} style={[styles.rightIconStyle,rightIconStyle]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default GlobalHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: HP_WP.hp(2),
    paddingBottom: HP_WP.hp(0.5),
    paddingLeft: HP_WP.hp(0.8),
  },
  titles: {
    color: COLORS.black,
    fontSize: SIZE.XL,
    textAlign: 'center',
    flex: 1,
    fontFamily:Font.semiBold
  },
  logo: {
    height: HP_WP.hp(3),
    width: HP_WP.wp(30),
    resizeMode: 'contain',
    flex: 1,
    alignSelf: 'center',
  },
  rightIconStyle:{
    height: HP_WP.hp(3),
    width: HP_WP.wp(6), 
  }
});
