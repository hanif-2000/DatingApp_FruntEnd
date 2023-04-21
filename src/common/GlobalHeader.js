import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import {COLORS, Font, HP_WP, IMAGE, SIZE} from './theme';

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
  mainContainer,
  onPress,
  drawerPress,
}) => {
  let Route = useNavigation();
  return (
    <View
      style={[
        styles.mainContainer,
        mainContainer,
        {paddingTop: Platform.OS === 'android' ? HP_WP.hp(2) : HP_WP.hp(0.5)},
      ]}>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          disabled={disabled}
          onPress={drawerPress ? onPress : () => Route.goBack()}>
          <Icon
            name={drawer ? 'menu' : withoutIcon ? '' : 'arrow-back'}
            type={'ionicons'}
            size={25}
            color={light ? COLORS.white : COLORS.black}
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
            <Image
              source={rightIcon}
              style={[styles.rightIconStyle, rightIconStyle]}
            />
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
    paddingBottom: HP_WP.hp(0.5),
  },
  iconContainer: {
    flex: 0.2,
    alignItems: 'flex-start',
  },
  titles: {
    color: COLORS.black,
    fontSize: SIZE.XL,
    textAlign: 'center',
    flex: 1,
    fontFamily: Font.semiBold,
  },
  logo: {
    height: HP_WP.hp(3),
    width: HP_WP.wp(30),
    resizeMode: 'contain',
    flex: 1,
    alignSelf: 'center',
  },
  rightIconStyle: {
    height: HP_WP.hp(3),
    width: HP_WP.wp(6),
  },
});
