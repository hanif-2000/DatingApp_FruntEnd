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
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {t} from 'i18next';
import Toast from 'react-native-toast-message';

import Container from '../common/Container';
import GlobalHeader from '../common/GlobalHeader';
import {COLORS, Font, HP_WP, IMAGE, SIZE} from '../common/theme';
import GlobalButton from '../common/GlobalButton';

import useAppData from '../service/AppData';

const LikeScreen = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('6');
  const [{upgraded}] = useAppData();
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
      blurRadius: 4,
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
        <Text style={styles.bottomCardTopText}>{t('getGold')}</Text>
        <LinearGradient
          start={{x: 1, y: 0.8}}
          end={{x: 0.1, y: 0.5}}
          colors={[COLORS.purple, COLORS.darkPurple]}
          style={styles.heartContainer}>
          <Icon name={'heart'} type="entypo" size={25} color={COLORS.white} />
        </LinearGradient>
        <Text style={styles.likesText}>{t('unlimitedLikes')}</Text>
        <Text style={styles.manyLikes}>{t('sendManyLikes')}</Text>
        <View style={styles.dotContainer}>
          <TouchableOpacity style={styles.dot} />
          <TouchableOpacity style={styles.dot} />
          <TouchableOpacity style={styles.dot} />
          <TouchableOpacity style={styles.dot} />
          <TouchableOpacity style={styles.dot} />
        </View>
        <View style={{flexDirection: 'row'}}>
          {data.map(item => (
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => onChange(item)}
              style={[
                styles.card,
                {
                  borderColor:
                    currentPlan == item.time ? COLORS.darkYellow : '#C0C0C0',
                  backgroundColor:
                    currentPlan == item.time ? COLORS.white : '#F7F7F7',
                },
              ]}>
              <Text
                style={[
                  styles.monthText,
                  {
                    fontSize: SIZE.XXXl,
                    color:
                      currentPlan == item.time
                        ? COLORS.darkYellow
                        : COLORS.black,
                  },
                ]}>
                {item.time}
              </Text>
              <Text
                style={[
                  styles.monthText,
                  {
                    color:
                      currentPlan == item.time
                        ? COLORS.darkYellow
                        : COLORS.black,
                  },
                ]}>
                {'months'}
              </Text>
              <Text
                style={[
                  styles.monthText,
                  {
                    marginTop: 10,
                    color:
                      currentPlan == item.time
                        ? COLORS.darkYellow
                        : COLORS.black,
                  },
                ]}>
                ${item.rate}/mo{' '}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <GlobalButton
          onPress={Modalclose}
          title={t('continue')}
          Style={{backgroundColor: COLORS.darkYellow, marginTop: 20}}
        />
      </View>
    );
  };

  return (
    <Container>
      <GlobalHeader title={t('like')} mainContainer={styles.header} />
      <View style={{flex: 1}}>
        <Text style={styles.likeText}>{t('likes')}</Text>
        <FlatList
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
          data={dataList}
          numColumns={2}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => trytochat(item.blurRadius)}
              style={styles.imageContainer}>
              <Image
                blurRadius={item.blurRadius}
                source={item.img}
                style={styles.imageStyle}
              />
              <View style={styles.imageLineContainer}>
                <View style={styles.imageLine} />
                <View style={styles.imageBottomLine} />
              </View>
            </TouchableOpacity>
          )}
        />
        <GlobalButton Style={styles.button} title={t('seeLike')} />
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
      <Spinner
        color={COLORS.purple}
        visible={loading}
        size="large"
        overlayColor="rgba(0,0,0,0.5)"
      />
    </Container>
  );
};

export default LikeScreen;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: HP_WP.wp(5),
  },
  likeText: {
    fontSize: SIZE.L,
    marginLeft: HP_WP.wp(5),
    color: COLORS.black,
    fontFamily: Font.semiBold,
    marginTop: 20,
  },
  flatList: {
    marginHorizontal: HP_WP.wp(2.5),
    marginTop: 6,
  },
  imageContainer: {
    marginHorizontal: HP_WP.wp(2.5),
    marginVertical: 5,
  },
  imageStyle: {
    width: HP_WP.wp(42.5),
    height: HP_WP.hp(26),
    resizeMode: 'cover',
    borderRadius: 12,
  },
  imageLineContainer: {
    flexDirection: 'column',
    position: 'absolute',
    bottom: '5%',
    left: '15%',
  },
  imageLine: {
    height: 4,
    width: 30,
    marginVertical: 5,
    backgroundColor: COLORS.white,
  },
  imageBottomLine: {
    height: 3,
    width: 25,
    marginVertical: 5,
    backgroundColor: COLORS.gray,
  },
  button: {
    backgroundColor: COLORS.darkYellow,
    marginVertical: 10,
  },
  topCardContainer: {
    borderRadius: 8,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
  },
  bottomCardTopText: {
    textAlign: 'center',
    color: COLORS.darkYellow,
    fontSize: SIZE.XXL,
    fontFamily: Font.semiBold,
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
  dotContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    borderWidth: 1,
    width: 15,
    height: 15,
    borderRadius: 100,
    borderColor: '#C0C0C0',
    marginHorizontal: 4,
  },
  card: {
    borderWidth: 0.8,
    width: '33.34%',
    alignItems: 'center',
    paddingVertical: 30,
    marginTop: 20,
  },
  monthText: {
    fontSize: SIZE.N,
    color: COLORS.black,
    fontFamily: Font.semiBold,
  },
});
