
import { createSlice } from '@reduxjs/toolkit';
import { Card } from '../utils/interfaces';

export interface FAvoriteState {
favorites:Card[]
}

const initialState: FAvoriteState = {
favorites:[]
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
      setFavorites: ((state,action: {type:string, payload:Card})=>{
            state.favorites.push(action.payload)
      }),
      removeFavorites: ((state,action:{type:string, payload:number})=>{
          state.favorites = state.favorites.filter(item => item.id !== action.payload)
      })
  },
  extraReducers: (builder) => {
  },
});
export const { setFavorites, removeFavorites}=favoriteSlice.actions
export default favoriteSlice.reducer;
