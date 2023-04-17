import {create} from 'zustand';

export const useStore = create(set => ({
  phone: '',
  userId: '',
  language: 'hi',
  fcmToken: '',
  lat:null,
  long:null,
  countryCodes:'+91',
  userName:"",
  country :"India",

  setLanguage: (language: any) =>
    set(() => ({
      language: language,
    })),
  setPhone: (phone: any) =>
    set(() => ({
      phone: phone,
    })),
  setUserId: (userId: any) =>
    set(() => ({
      userId: userId,
    })),
  setFcmToken: (fcmToken: any) =>
    set(() => ({
      fcmToken: fcmToken,
    })),
    setLat: (lat: any) =>
    set(() => ({
      lat: lat,
    })),
    setLong: (long: any) =>
    set(() => ({
      long: long,
    })),
    setCountryCodes: (countryCodes: any) =>
    set(() => ({
      countryCodes: countryCodes,
    })),
    setUserName: (userName: any) =>
    set(() => ({
      userName: userName,
    })),
    setCountry: (country: any) =>
    set(() => ({
      country: country,
    })),
}));

export default () => {
  return [
    {
      phone: useStore((state: any) => state.phone),
      userId: useStore((state: any) => state.userId),
      language: useStore((state: any) => state.language),
      fcmToken: useStore((state: any) => state.fcmToken),
      lat: useStore((state: any) => state.lat),
      long: useStore((state: any) => state.long),
      countryCodes: useStore((state: any) => state.countryCodes),
      userName: useStore((state: any) => state.userName), 
      country: useStore((state: any) => state.country), 
    },
  ];
};
