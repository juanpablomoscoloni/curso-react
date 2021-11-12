import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Card } from '../utils/interfaces'
export interface CardDetail {
  detail : Card | null,
  status: 'idle' | 'loading' | 'failed'| 'succeded';
}

const initialState: CardDetail = {
  detail :null,
  status: 'idle',
};


export const getCardDetail = createAsyncThunk(
  'cardDetail/getCardDetail',
  async (id:string) => {
    const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`)
    return response.data;
  }
);

export const cardDetail = createSlice({
  name: 'cardDetail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
     builder
       .addCase(getCardDetail.pending, (state) => {
         state.status = 'loading';
       })
       .addCase(getCardDetail.fulfilled, (state, action: any) => {
         state.status = 'succeded';
        state.detail = action.payload.data[0];
       });
  },
});


export default cardDetail.reducer;
