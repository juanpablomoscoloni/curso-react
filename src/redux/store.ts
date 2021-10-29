import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardSlice from '../features/card/cardSlice';
import cardDetailSlice from '../features/card/cardDetailSlice';

export const store = configureStore({
  reducer: {
    card: cardSlice,
    cardDetail: cardDetailSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
