import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cardSlice from '../slices/cardSlice';
import cardDetailSlice from '../slices/cardDetailSlice';
import favoritesSlice from '../slices/favoritesSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import storageSession from 'redux-persist/lib/storage/session'

import { combineReducers } from 'redux';
import authSlice from '../slices/authSlice';

export const rootReducer = combineReducers({
    card: cardSlice,
    favorites :favoritesSlice,
    cardDetail: cardDetailSlice,
    auth: authSlice
});

const persistConfig = {
  key: 'root',
  storage: storage || storageSession,
   whiteList: ['favorites'], 
  blacklist: ['card','cardDetail'], 
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const persistor = persistStore(store);