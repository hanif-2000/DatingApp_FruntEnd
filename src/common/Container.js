import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  View,
  SafeAreaView,
  Pressable,
  Keyboard,
} from 'react-native';
import {COLORS, HP_WP} from './theme';

const Container = ({isLight, translucent, children, Style, hidden}) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={[styles.container, Style]}>
        <StatusBar
          animated={true}
          backgroundColor={COLORS.white}
          barStyle={isLight ? 'light-content' : 'dark-content'}
          translucent={translucent}
          hidden={hidden ? true : false}
        />
        <Pressable onPress={() => Keyboard.dismiss()} style={{flex:1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {children}
        </KeyboardAvoidingView>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Container;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
    width: HP_WP.wp(100),
    alignSelf: 'center',
  },
});
