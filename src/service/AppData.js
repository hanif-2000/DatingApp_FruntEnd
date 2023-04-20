import { create } from 'zustand';

export const useStore = create(set => ({
  upgraded: false,
  userId: '',

  setUpgraded: (upgraded) =>
    set(() => ({
      upgraded: upgraded,
    })),
  setUserId: (userId) =>
    set(() => ({
      userId: userId,
    })),
}));

export default () => {
  return [
    {
      upgraded: useStore((state) => state.upgraded),
      userId: useStore((state) => state.userId),
    },
  ];
};
