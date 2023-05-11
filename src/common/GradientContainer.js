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
      start={{x: 0, y: 0}}
      end={{x: 0, y:.7}}
      colors={[COLORS.purple, COLORS.black]}
      style={styles.linearGradient}>
      <SafeAreaView style={[styles.linearGradient,{backgroundColor: 'transparent'}]}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor={COLORS.purple}
            barStyle={'light-content'}
          />
          <KeyboardAvoidingView
            style={styles.linearGradient}
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
  },
  linearGradient: {
    flex: 1,
  },
});
