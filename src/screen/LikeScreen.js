import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Modal from 'react-native-modal';
import {Icon} from 'react-native-elements';

import Container from '../comman/Container';
import GlobalHeader from '../comman/GlobalHeader';
import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../comman/theme';
import GlobalButton from '../comman/GlobalButton';

const LikeScreen = ({navigation}) => {
  const [isVisible, setVisible] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('6');

  const Modalclose = () => setVisible(false);
  const Modalopen = () => setVisible(true);

  const dataList = [
    {
      img: IMAGE.VideoCall,
      blurRadius: 0,
    },
    {
      img: IMAGE.VideoCall,
      blurRadius: 4,
    },
    {
      img: IMAGE.VideoCall,
      blurRadius: 4,
    },
    {
      img: IMAGE.VideoCall,
      blurRadius: 4,
    },
    {
      img: IMAGE.VideoCall,
      blurRadius: 0,
    },
  ];

  const trytochat = type => {
    if (type == 0) {
      navigation.navigate('FitMatch');
    } else {
      Modalopen();
    }
  };

  data = [
    {id: 1, time: '12', rate: '7'},
    {id: 2, time: '6', rate: '10'},
    {id: 3, time: '1', rate: '9'},
  ];
  const onChange = item => {
    setCurrentPlan(item.time);
  };
  const ModalUI = () => {
    return (
      <View style={styles.topCardContainer}>
        <Text style={styles.bottomCardTopText}>Get Mingle Gold</Text>
        <LinearGradient
          start={{x: 1, y: 0.8}}
          end={{x: 0.1, y: 0.5}}
          colors={['#B44CF4', '#7A29AC']}
          style={styles.heartContainer}>
          <Icon name={'heart'} type="entypo" size={25} color={COLORS.white} />
        </LinearGradient>
        <Text style={styles.likesText}>Unlimited Likes</Text>
        <Text style={styles.manyLikes}>Send as many likes as you want</Text>
        <View style={styles.dotMainContainer}>
          <FlatList
            horizontal={true}
            data={[1, 2, 3, 4, 5]}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.dotContainer} />
            )}
          />
        </View>
        <FlatList
          numColumns={3}
          data={data}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onChange(item)}
                style={[
                  styles.card,
                  {
                    borderColor:
                      currentPlan == item.time ? '#FFA31A' : '#C0C0C0',
                    backgroundColor:
                      currentPlan == item.time ? '#fff' : '#F7F7F7',
                  },
                ]}>
                <Text
                  style={[
                    styles.monthText,
                    {
                      fontSize: SIZE.XXXl,
                      color: currentPlan == item.time ? '#B67718' : '#000',
                    },
                  ]}>
                  {item.time}
                </Text>
                <Text
                  style={[
                    styles.monthText,
                    {color: currentPlan == item.time ? '#B67718' : '#000'},
                  ]}>
                  {'months'}
                </Text>
                <Text
                  style={[
                    styles.monthText,
                    {
                      marginTop: 10,
                      color: currentPlan == item.time ? '#B67718' : '#000',
                    },
                  ]}>
                  ${item.rate}/mo
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <GlobalButton
          onPress={Modalclose}
          title={'CONTINUE'}
          Style={{backgroundColor: '#B67718', marginTop: 20}}
        />
      </View>
    );
  };

  return (
    <Container>
      <GlobalHeader title={'Like'} />
      <View style={{flex: 1}}>
        <Text style={{fontSize: 18, fontWeight: '500', paddingLeft: 10}}>
          7 Likes
        </Text>
        <FlatList
          contentContainerStyle={{marginHorizontal: HP_WP.wp(1)}}
          data={dataList}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => trytochat(item.blurRadius)}
              style={{marginHorizontal: HP_WP.wp(1), marginVertical: 5}}>
              <Image
                blurRadius={item.blurRadius}
                source={item.img}
                style={[
                  {
                    width: HP_WP.wp(47),
                    height: 190,
                    resizeMode: 'cover',
                    borderRadius: 5,
                  },
                ]}
              />
              <View
                style={{
                  flexDirection: 'column',
                  position: 'absolute',
                  bottom: '5%',
                  left: '15%',
                }}>
                <View
                  style={{
                    height: 4,
                    width: 30,
                    marginVertical: 5,
                    backgroundColor: '#fff',
                  }}
                />
                <View
                  style={{
                    height: 3,
                    width: 25,
                    marginVertical: 5,
                    backgroundColor: '#9e9e9e',
                  }}
                />
              </View>
            </TouchableOpacity>
          )}
        />
        <GlobalButton
          Style={{backgroundColor: '#EEAF51', marginBottom: 10}}
          title={'SEE WHO LIKES YOU'}
        />
      </View>
      <Modal
        style={{margin: 0}}
        visible={isVisible}
        backgroundColor="rgba(0,0,0,0.7)"
        backdropOpacity={1}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={1500}
        animationOutTiming={1500}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        onBackButtonPress={Modalclose}
        onBackdropPress={Modalclose}>
        <ModalUI />
      </Modal>
    </Container>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  topCardContainer: {
    borderRadius: 8,
    borderWidth: 0.8,
    borderColor: COLORS.gray,
    marginTop: HP_WP.hp(3),
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  heartContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  likesText: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: SIZE.XL,
    fontFamily: Font.medium,
  },
  manyLikes: {
    color: COLORS.black,
    textAlign: 'center',
    fontSize: SIZE.M,
    fontFamily: Font.light,
    marginVertical: 10,
  },
  dotMainContainer: {
    marginVertical: 10,
    alignSelf: 'center',
    flex: 1,
  },
  dotContainer: {
    width: 10,
    height: 10,
    borderRadius: 50,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: '#C0C0C0',
  },
  card: {
    borderWidth: 0.8,
    borderWidth: 0.8,
    width: '33.33%',
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 20,
  },
  monthText: {
    fontSize: SIZE.N,
    color: COLORS.black,
    fontFamily: Font.semiBold,
    lineHeight: 25,
  },
  bottomCardTopText: {
    textAlign: 'center',
  },
});
