import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import {  Card, FilterType, Page, Parameters, Pages } from '../utils/interfaces'
export interface CardState {
  value: number;
  cards : Card[]
  status: 'idle' | 'loading' | 'failed'| 'succeded';
  filters:Filters
  page: Page 
  returnedPages: Pages[]
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
  filters: {Attribute:'', Race:'', Type:'',Order:''},
  page: { pages: 0,nextPageLink: '',previosPageLink: '', currentPage:1},
  returnedPages: []
};

export const getAllCards = createAsyncThunk(
  'cards/getAllCards',
  async (offset:number) => {
    const response = await axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?attribute=Dark&num=20&offset=${offset}`,{
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    return response.data;
  }
);

export const getCardsByOrder = createAsyncThunk(
  'cards/getCardsByOrder',
  async (param:Parameters,{getState}:any) => {
    const filtros  =  getState().card.filters
    const attribute = filtros.Attribute ? `plataform=${filtros.Attribute}&` : ''
    const race = filtros.Race ? `plataform=${filtros.Race}&` : ''
    const type = filtros.Type ? `plataform=${filtros.Type}&` : ''
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${param.offset}
    ${attribute}${race}${type}&sort=${param.query}`,{
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    return response.data;
  }
);

export const getCardsByAttribute = createAsyncThunk(
  'cards/getCardsByAttribute',
  async (param:Parameters) => {
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${param.offset}&attribute=${param.query}`,{
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    return response.data;
  }
);

export const getCardsByType = createAsyncThunk(
  'cards/getCardsByType',
  async (param:Parameters) => {
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${param.offset}&type=${param.query}`,{
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    return response.data;
  }
);

export const getCardsByRace = createAsyncThunk(
  'cards/getCardsByRace',
  async (param:Parameters) => {
    const response = await axios.get( `https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=${param.offset}&race=${param.query}`,{
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    return response.data;
  }
);

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setFilters:((state,action)=>{
      const type: FilterType = action.payload.type
      const value : string = action.payload.value
      if(type === 'Attribute') {state.filters.Type=''; state.filters.Race='';}
      if(type === 'Type') {state.filters.Attribute = ''; state.filters.Race=''}
      if(type === 'Race') {state.filters.Attribute = ''; state.filters.Type=''}
        state.filters[type]= value
    }),
    setCards:((state,action)=>{
      console.log(action.payload.ca)
      state.cards = action.payload.cards
      state.page.currentPage = action.payload.page
    })
  },
  extraReducers: (builder) => {
     builder
       .addCase(getAllCards.pending, (state) => {
         state.status = 'loading';
       })
       .addCase(getAllCards.fulfilled, (state, action: any) => {
         state.status = 'succeded';
        state.cards = action.payload.data;
        let page: Page = {
          pages: action.payload.meta.total_pages,
          nextPageLink: action.payload.meta.pnext_page,
          previosPageLink: action.payload.meta.previous_page,
          currentPage: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
      };
      state.page = page;
      let returnedPage : Pages = {
        cards : action.payload.data,
        page: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
        attribute: state.filters.Attribute,
        race: state.filters.Race,
        type: state.filters.Type,
        order: state.filters.Order
      };
      state.returnedPages.push(returnedPage);
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
       let page: Page = {
        pages: action.payload.meta.total_pages,
        nextPageLink: action.payload.meta.pnext_page,
        previosPageLink: action.payload.meta.previous_page,
        currentPage: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
    };
    state.page = page;
    let returnedPage : Pages = {
      cards : action.payload.data,
      page: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
      attribute: state.filters.Attribute,
      race: state.filters.Race,
      type: state.filters.Type,
      order: state.filters.Order
    };
    state.returnedPages.push(returnedPage);
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
     let page: Page = {
      pages: action.payload.meta.total_pages,
      nextPageLink: action.payload.meta.pnext_page,
      previosPageLink: action.payload.meta.previous_page,
      currentPage: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
  };
  state.page = page;
  let returnedPage : Pages = {
    cards : action.payload.data,
    page: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
    attribute: state.filters.Attribute,
    race: state.filters.Race,
    type: state.filters.Type,
    order: state.filters.Order
  };
  state.returnedPages.push(returnedPage);
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
   let page: Page = {
    pages: action.payload.meta.total_pages,
    nextPageLink: action.payload.meta.pnext_page,
    previosPageLink: action.payload.meta.previous_page,
    currentPage: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
};
state.page = page;
let returnedPage : Pages = {
  cards : action.payload.data,
  page: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
  attribute: state.filters.Attribute,
  race: state.filters.Race,
  type: state.filters.Type,
  order: state.filters.Order
};
state.returnedPages.push(returnedPage);
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
 let page: Page = {
  pages: action.payload.meta.total_pages,
  nextPageLink: action.payload.meta.pnext_page,
  previosPageLink: action.payload.meta.previous_page,
  currentPage: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
};
state.page = page;
let returnedPage : Pages = {
  cards : action.payload.data,
  page: (action.payload.meta.total_pages - action.payload.meta.pages_remaining) + 1,
  attribute: state.filters.Attribute,
  race: state.filters.Race,
  type: state.filters.Type,
  order: state.filters.Order
};
state.returnedPages.push(returnedPage);
})
.addCase(getCardsByOrder.rejected, (state, action: any) => {
 state.status = 'failed';
state.cards = action.error;
});

 }

});

export const {setFilters}=cardSlice.actions
export const {setCards}=cardSlice.actions
export default cardSlice.reducer;
