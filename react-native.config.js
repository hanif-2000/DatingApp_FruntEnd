module.exports = {
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        ios: null,
      },
    },
    '@jesster2k10/react-native-range-slider': {
      platforms: {
        android: {
          packageImportPath:
            'import com.jesster2k10reactnativerangeslider.ReactNativeRangeSliderPackage;',
        },
      },
    },
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts'],
};