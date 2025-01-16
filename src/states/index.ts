import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { UserSlice, createUserSlice } from './userState';

export const useAppStore = create<UserSlice>()(
  immer((...a) => ({
    ...createUserSlice(...a),
  })),
);

export * from './userState';
