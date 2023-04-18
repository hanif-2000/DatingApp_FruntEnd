import {create} from 'zustand';

export const useStore = create(set => ({
  phone: '',
  userId: '',

  setPhone: (phone) =>
    set(() => ({
      phone: phone,
    })),
  setUserId: (userId) =>
    set(() => ({
      userId: userId,
    })),
}));

export default () => {
  return [
    {
      phone: useStore((state) => state.phone),
      userId: useStore((state) => state.userId), 
    },
  ];
};
