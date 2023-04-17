import {
    StyleSheet,
    Platform,
    KeyboardAvoidingView,
    StatusBar,
    View,
  } from 'react-native';
  import {HP_WP} from './theme';
  
  const Container = ({isLight, translucent, children}) => {
    return (
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#F9F9F9"
          barStyle={isLight ? 'light-content' : 'dark-content'}
          translucent={translucent}
        />
        <KeyboardAvoidingView
          style={{height: '100%', width: '100%'}}
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
      backgroundColor: '#F9F9F9',
      width: HP_WP.wp(100),
      alignSelf: 'center',
    },
  });