import {
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  View,
  SafeAreaView,
} from 'react-native';
import { HP_WP } from './theme';

const Container = ({ isLight, translucent, children, Style, hidden }) => {
  return (
      <View style={[styles.container, Style]}>
        <StatusBar
          animated={true}
          backgroundColor={"#000"}
          barStyle={isLight ? 'light-content' : 'dark-content'}
          translucent={translucent}
          hidden={hidden ? true : false}
        />
        <KeyboardAvoidingView
          style={{ flex: 1, }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {children}
        </KeyboardAvoidingView>
      </View>
  );
};
export default Container;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    width: HP_WP.wp(100),
    alignSelf: 'center',
  },
});
