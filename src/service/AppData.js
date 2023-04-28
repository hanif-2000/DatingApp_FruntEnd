import { create } from 'zustand';

export const useStore = create(set => ({
  upgraded: false,
  userData:{},
  token:null,

  setUpgraded: (upgraded) =>
    set(() => ({
      upgraded: upgraded,
    })),
    setUserData: (userData) =>
    set(() => ({
      userData: userData,
    })),
setToken: (token) =>
set(() => ({
  token: token,
})),
}));

export default () => {
  return [
    {
      upgraded: useStore((state) => state.upgraded),
      userData: useStore((state) => state.userData),
      token: useStore((state) => state.token),
    },
  ];
};
