import AsyncStorage from '@react-native-async-storage/async-storage';

var setRegToken = async function (isToken) {
  await AsyncStorage.setItem('token', isToken);
};
var getRegToken = async function () {
  return await AsyncStorage.getItem('token');
};


export {
  setRegToken,
  getRegToken,
};
