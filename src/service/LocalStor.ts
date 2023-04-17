import AsyncStorage from '@react-native-async-storage/async-storage';

var setRegToken = async function (isToken: string) {
  await AsyncStorage.setItem('token', isToken);
};

var getRegToken = async function () {
  return await AsyncStorage.getItem('token');
};

var setUserNames = async function (userName: string) {
  await AsyncStorage.setItem('userName', userName);
};
var getUserNames = async function () {
  return await AsyncStorage.getItem('userName');
};

var setLocalLanguage = async function (language: string) {
  await AsyncStorage.setItem('language', language);
};
var getLocalLanguage = async function () {
  return await AsyncStorage.getItem('language');
};

var setCity = async function (city: string) {
  await AsyncStorage.setItem('city', city);
};
var getCity = async function () {
  return await AsyncStorage.getItem('city');
};

var setAddress = async function (address: string) {
  await AsyncStorage.setItem('address', address);
};
var getAddress = async function () {
  return await AsyncStorage.getItem('address');
};

var setMobile = async function (number: string) {
  await AsyncStorage.setItem('number', number);
};
var getMobile = async function () {
  return await AsyncStorage.getItem('number');
};

var setUserPassword = async function (userPassword: string) {
  await AsyncStorage.setItem('userPassword', userPassword);
};
var getUserPassword = async function () {
  return await AsyncStorage.getItem('userPassword');
};

export {
  setRegToken,
  getRegToken,
  setUserNames,
  getUserNames,
  setLocalLanguage,
  getLocalLanguage,
  setCity,
  getCity,
  setAddress,
  getAddress,
  setMobile,
  getMobile,
  setUserPassword,
  getUserPassword
};
