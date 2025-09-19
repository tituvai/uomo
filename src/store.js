import { configureStore } from '@reduxjs/toolkit'
import  addToCartSlice  from './features/addCart/addToCartSlice'
import  detalisSlice  from './features/details/detalisSlice'
import  wishSlice  from './features/addCart/wishSlice'



export default configureStore({
  reducer: {
    cart : addToCartSlice,
    detalis: detalisSlice,
    wish: wishSlice
  },
})