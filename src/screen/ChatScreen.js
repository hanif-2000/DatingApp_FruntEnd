import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React from 'react';
  import {COLORS, HP_WP, IMAGE, SIZE} from '../comman/theme';
  import Container from '../comman/Container';
  
  const ChatScreen = () => {
    return (
      <Container>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={() => {
            return (
              <View style={styles.flist}>
                <TouchableOpacity
                  style={{flexDirection: 'row', height: HP_WP.hp(12)}}>
                  <Image
                    source={ IMAGE.Lucy}
                    style={styles.Image}
                  />
                  <Text style={styles.titel}>Siliva</Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.Chat}>
                    I’m not a hoarder but I really...
                  </Text>
                  <Text style={styles.Chat}>11:30</Text>
                </View>
              </View>
            );
          }}
        />
      </Container>
    );
  };
  
  export default ChatScreen;
  
  const styles = StyleSheet.create({
    flist: {
      flex: 1,
      width: HP_WP.wp(100),  
      justifyContent: 'center',
    },
    Image: {
      width: HP_WP.wp(14),
      height: HP_WP.hp(10),
      resizeMode: 'contain',
      marginLeft: 10,
    },
    titel: {
      color: COLORS.black,
      marginLeft: HP_WP.wp(4),
      fontSize: SIZE.XL,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
    Chat: {
      color: COLORS.black,
      alignItems: 'center',
      marginTop: -22,
      marginLeft: 78,
    },
  });
  