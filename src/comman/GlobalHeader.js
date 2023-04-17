import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {Icon} from 'react-native-elements';

import {COLORS, Font, HP_WP, SIZE} from './theme';

const GlobalHeader = ({
  title,
  rightIcon,
  rightImage,
  onPressLeft,
  onPressRight,
  rightIconStyle,
  drawer = false,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 0.2}}>
        <TouchableOpacity onPress={onPressLeft}>
          {/* <Icon
            name={drawer ? 'menu' : 'arrow-back'}
            type="ionicons"
            size={20}
            color="#887700"
          /> */}
        </TouchableOpacity>
      </View>
      <Text style={styles.titles}>{title}</Text>
      <View style={{flex: 0.2}}>
        {rightImage && (
          <TouchableOpacity
            onPress={onPressRight}
            style={{alignSelf: 'flex-end'}}>
            <Image source={rightIcon} style={rightIconStyle} />
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: HP_WP.hp(1),
    paddingBottom:HP_WP.hp(0.5),
  },
  titles: {
    color: COLORS.lightBlack,
    fontSize: SIZE.L,
    fontFamily: Font.semiBold,
    textAlign: 'center',
    flex: 1,
  },
});