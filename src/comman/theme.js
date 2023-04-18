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
    blk:'#303030',
    black: '#000000',
    white: '#ffffff',
    orange: '#E75C25',
    purple: '#AA3FEC',
    light: '#D8D8DC',
    lightGray: '#AEAEB2',
    gray: '#C4C4C4',
    lightBlack2: '#333333',
    darkGray: '#6C6C70',
    lightBlack: '#2C2C2E',
    mediumGray: '#8E8E93',
    lightPink: '#E8DDEE',
    lowestPink: '#FBF4FF',
    lowestBlue: '#F5F5FA',
    shadow: '#F2F2F3',
    green: '#66AE45',
  };

  export const IMAGE ={
    Logo: require('../assets/images/logo.png'),
    Lucy: require('../assets/images/lucy.png'),
    Lucy1:require('../assets/images/lucy1.png'),
    Lucy2:require('../assets/images/lucy2.png'),
    MatchImage:require('../assets/images/matchImage.png'),
    MatchImage1:require('../assets/images/matchImage1.png'),
    Profile:require('../assets/images/profile.png'),
    Siliva:require('../assets/images/siliva.png'),
    VideoCall:require('../assets/images/videoCallImage.png')
  }