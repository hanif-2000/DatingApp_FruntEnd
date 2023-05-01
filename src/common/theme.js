import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RFPercentage} from 'react-native-responsive-fontsize';

export const HP_WP = {wp, hp};

export const Font = {
  blackBold: 'Poppins-Black',
  bold: 'Poppins-Bold',
  extraBold: 'Poppins-ExtraBold',
  extraLight: 'Poppins-ExtraLight',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  thin: 'Poppins-Thin',
  semiBold: 'Poppins-SemiBold',
};

export const SIZE = {
  VS: RFPercentage(1), //8
  S: RFPercentage(1.3), //10
  M: RFPercentage(1.6), //12
  N: RFPercentage(1.8), //14
  NL: RFPercentage(2), //15
  L: RFPercentage(2.1), //16
  XL: RFPercentage(2.3), //18
  XXL: RFPercentage(2.6), //20
  XXXl: RFPercentage(2.8), //22
  XT: RFPercentage(3), //24
};

export const COLORS = {
  darkWhite: '#FAFAFA',
  blk: '#303030',
  black: '#000',
  white: '#ffffff',
  gray: '#C6C6C6',
  blue: '#247DCF',
  darkGray: '#2D2D2D',
  lightGray: '#8E8E8E',
  mediumGray: '#828282',
  orange: '#E75C25',
  red: '#FF2D2D',
  yellow: '#FFD912',
  darkYellow: '#EEAF51',
  lightPurple: '#BD94D7',
  purple: '#AA3FEC',
  darkPurple: '#7A29AC',
  light: '#D8D8DC',
  lightBlack2: '#333333',
  lightBlack: '#2C2C2E',
  lowestBlue: '#F5F5FA',
};
export const IMAGE = {
  Logo: require('../assets/images/logo.png'),
  Lucy: require('../assets/images/lucy.png'),
  Lucy1: require('../assets/images/lucy1.png'),
  Lucy2: require('../assets/images/lucy2.png'),
  MatchImage: require('../assets/images/matchImage.png'),
  MatchImage1: require('../assets/images/matchImage1.png'),
  Profile: require('../assets/images/profile.png'),
  Siliva: require('../assets/images/siliva.png'),
  VideoCall: require('../assets/images/videoCallImage.png'),
  profileBgImage: require('../assets/images/profileBgImag.png'),
  logo2: require('../assets/images/logo2.png'),
  itsMatch: require('../assets/images/ItsMatch.png'),
  check: require('../assets/images/check.png'),
};
