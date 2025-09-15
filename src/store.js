import { configureStore } from '@reduxjs/toolkit'
import  addToCartSlice  from './features/addCart/addToCartSlice'



export default configureStore({
  reducer: {
    cart : addToCartSlice
  },
})