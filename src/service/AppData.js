import { create } from 'zustand';

export const useStore = create(set => ({
  upgraded: false,
  userData: {},
  fcmToken: null,
  userId: null,
  accessToken: null,


  setAccessToken: accessToken =>
    set(() => ({
      accessToken: accessToken,
    })),
  setUserId: userId =>
    set(() => ({
      userId: userId,
    })),
  setUpgraded: upgraded =>
    set(() => ({
      upgraded: upgraded,
    })),
  setUserData: userData =>
    set(() => ({
      userData: userData,
    })),
  setFcmToken: token =>
    set(() => ({
      fcmToken: token,
    })),
}));

export default () => {
  return [
    {

      upgraded: useStore(state => state.upgraded),
      userData: useStore(state => state.userData),
      fcmToken: useStore(state => state.fcmToken),
      userId: useStore(state => state.userId),
      accessToken: useStore(state => state.accessToken),
    },
  ];
};
