import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'




 export const fetchUser =  createAsyncThunk('/fetch/getUser',async()=>{
      const res = await axios.get('https://fakestoreapi.com/products')
      return res.data
})



const userSlice = createSlice({
  name:"user",
  initialState:{
    loading:false,
    error:false,
    data:null
  },



  extraReducers:(builder)=>{
    builder.addCase(fetchUser.fulfilled,(state,action)=>{

      state.loading= false,
      state.data= action.payload

    }),
    builder.addCase(fetchUser.pending,(state,action)=>{
      state.loading= true,
      state.error= action.payload

    }),
    builder.addCase(fetchUser.rejected,(state,action)=>{
      state.loading= true,
      state.error= action.payload
   
    })
  }
})



export default userSlice.reducer