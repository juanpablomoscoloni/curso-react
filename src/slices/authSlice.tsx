
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { googleAuthProvider } from '../components/firebase/firebase';
import { RootState, AppThunk } from '../redux/store';
import { firebase }from '../components/firebase/firebase';
export interface AuthState {
  logueado : boolean;
  token: string;
  status: 'idle' | 'loading' | 'failed'| 'succeded';
  user:any
}

const initialState: AuthState = {
    logueado : false,
    token : '',
    status: 'idle',
    user:{}
};

export const registerUser = createAsyncThunk(
  'auth/registerUSer',
  async (user:{email:string, password:string})=>{
    const{email,password}=user
  
    let response = await  firebase.auth().createUserWithEmailAndPassword( email, password )
   return  response
  }
)
export const signInWithGoogle = createAsyncThunk(
  'auth/signInWithGoogle',
  async ()=>{
  
    let response = await    firebase.auth().signInWithPopup(googleAuthProvider)

   return  response
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout:((state)=>{
      state.logueado = false
      state.user={}
    })
  },
  extraReducers: (builder) => {
     builder
       .addCase(registerUser.pending, (state) => {
         state.status = 'loading';
       })
       .addCase(registerUser.fulfilled, (state, action) => {
         state.status = 'succeded';
         state.user = action.payload;
       })
       .addCase(registerUser.rejected, (state,action) => {
        state.status = 'failed';
        state.user = action.payload;
      })
      .addCase(signInWithGoogle.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.status = 'succeded';
        let obj = {
          nombreCompleto: action.payload.user?.displayName,
          mail: action.payload.user?.email,
          image: action.payload.user?.photoURL
        }
        state.user = obj;
        state.logueado = true
      })
      .addCase(signInWithGoogle.rejected, (state,action) => {
       state.status = 'failed';
       state.user = action.payload;
     })
  },
});
export const {logout}= authSlice.actions

export default authSlice.reducer;
