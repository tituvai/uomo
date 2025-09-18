import { configureStore } from '@reduxjs/toolkit'
import  addToCartSlice  from './features/addCart/addToCartSlice'
import  detalisSlice  from './features/details/detalisSlice'



export default configureStore({
  reducer: {
    cart : addToCartSlice,
    detalis: detalisSlice
  },
})