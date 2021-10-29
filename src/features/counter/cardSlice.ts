import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState, AppThunk } from '../../redux/store';
import { fetchCount } from './counterAPI';
import {  Card, FilterType } from '../../utils/interfaces'
import { platform } from 'process';
import { TypedUseSelectorHook } from 'react-redux';
import type { useAppDispatch } from '../../redux/hooks'
export interface CardState {
  value: number;
  cards : Card[]
  status: 'idle' | 'loading' | 'failed'| 'succeded';
  filters:Filters
}

type Filters = {
  Attribute: string,
  Race:string,
  Type:string,
  Order:string
}

const initialState: CardState = {
  value: 0,
  cards :[],
  status: 'idle',
  filters: {Attribute:'', Race:'', Type:'',Order:''}
};


export const getAllCards = createAsyncThunk(
  'cards/getAllCards',
  async () => {
    const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=Dark',{
      headers: {
        'Content-Type': 'text/plain'//the token is a variable which holds the token
      }
    })
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const getCardsByOrder = createAsyncThunk(
  'cards/getCardsByOrder',
  async (query:string,{getState}:any) => {
    const filtros  =  getState().card.filters
    const attribute = filtros.Attribute ? `plataform=${filtros.Attribute}&` : ''
    const race = filtros.Race ? `plataform=${filtros.Race}&` : ''
    const type = filtros.Type ? `plataform=${filtros.Type}&` : ''
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?
    ${attribute}${race}${type}&sort=${query}`,{
      headers: {
        'Content-Type': 'text/plain'//the token is a variable which holds the token
      }
    })
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const getCardsByAttribute = createAsyncThunk(
  'cards/getCardsByAttribute',
  async (query:string) => {
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=${query}`,{
      headers: {
        'Content-Type': 'text/plain'//the token is a variable which holds the token
      }
    })
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const getCardsByType = createAsyncThunk(
  'cards/getCardsByType',
  async (query:string) => {
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?type=${query}`,{
      headers: {
        'Content-Type': 'text/plain'//the token is a variable which holds the token
      }
    })
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const getCardsByRace = createAsyncThunk(
  'cards/getCardsByRace',
  async (query:string) => {
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?race=${query}`,{
      headers: {
        'Content-Type': 'text/plain'//the token is a variable which holds the token
      }
    })
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setFilters:((state,action)=>{
      const type: FilterType = action.payload.type
      const value : string = action.payload.value
      if(type === 'Attribute') {state.filters.Type=''; state.filters.Race='';}
      if(type === 'Type') {state.filters.Attribute = ''; state.filters.Race=''}
      if(type === 'Race') {state.filters.Attribute = ''; state.filters.Type=''}
        state.filters[type]= value
    })
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
     builder
       .addCase(getAllCards.pending, (state) => {
         state.status = 'loading';
       })
       .addCase(getAllCards.fulfilled, (state, action: any) => {
         state.status = 'succeded';
        state.cards = action.payload.data;
       })
       .addCase(getAllCards.rejected, (state, action: any) => {
        state.status = 'failed';
       state.cards = action.error;
      })     
      .addCase(getCardsByRace.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCardsByRace.fulfilled, (state, action: any) => {
        state.status = 'succeded';
       state.cards = action.payload.data;
      })
      .addCase(getCardsByRace.rejected, (state, action: any) => {
       state.status = 'failed';
      state.cards = action.error;
     })
     .addCase(getCardsByType.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(getCardsByType.fulfilled, (state, action: any) => {
      state.status = 'succeded';
     state.cards = action.payload.data;
    })
    .addCase(getCardsByType.rejected, (state, action: any) => {
     state.status = 'failed';
    state.cards = action.error;
   })
   .addCase(getCardsByAttribute.pending, (state) => {
    state.status = 'loading';
  })
  .addCase(getCardsByAttribute.fulfilled, (state, action: any) => {
    state.status = 'succeded';
   state.cards = action.payload.data;
  })
  .addCase(getCardsByAttribute.rejected, (state, action: any) => {
   state.status = 'failed';
  state.cards = action.error;
 })
 .addCase(getCardsByOrder.pending, (state) => {
  state.status = 'loading';
})
.addCase(getCardsByOrder.fulfilled, (state, action: any) => {
  state.status = 'succeded';
 state.cards = action.payload.data;
})
.addCase(getCardsByOrder.rejected, (state, action: any) => {
 state.status = 'failed';
state.cards = action.error;
});
 }

});

export const {setFilters}=cardSlice.actions
export default cardSlice.reducer;
