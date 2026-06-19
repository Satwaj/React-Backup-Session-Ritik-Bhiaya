import {configureStore} from '@reduxjs/toolkit'
import userSlice from './Features/CounterSlice'

 export const store = configureStore({
  reducer :{
    user:userSlice
  }
 })

 