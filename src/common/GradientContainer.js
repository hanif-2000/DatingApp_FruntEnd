import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';
import {COLORS, HP_WP} from './theme';
import LinearGradient from 'react-native-linear-gradient';

const GradientContainer = ({children}) => {
  return (
    <LinearGradient
      start={{x: 0.9, y: 0}}
      end={{x: 0.9, y: 0.9}}
      colors={['#BD94D7', '#000000']}
      style={styles.linearGradient}>
      <SafeAreaView style={[{flex: 1, backgroundColor: 'transparent'}]}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor={'#BD94D7'}
            barStyle={ 'light-content'}
          />
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            {children}
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};
export default GradientContainer;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
    width: HP_WP.wp(100),
    alignSelf: 'center',
    // paddingHorizontal:HP_WP.wp(5)
  },
  linearGradient: {flex: 1},
});
