import { createSlice } from '@reduxjs/toolkit'

export const wishSlice = createSlice({
  name: 'addWish',
  initialState: {
    value: [],
  },
  reducers: {
     addWish: (state, action) => {
        let alldata= state.value.find(item=>item.title===action.payload.title)
        if(alldata){
            alldata.quantity += 1;
            
        }else{
            state.value.push({...action.payload, quantity:1})
            
        }
},

// Count Part Start 

wishIncement: (state, action)=>{
    state.value.map((item)=>{
        if(item.title === action.payload.title){
            item.quantity +=1;
        }
    })
},
wishDicement:(state, action)=>{
    state.value.map((item)=>{
        if(item.title===action.payload.title && item.quantity >1){
            item.quantity -=1;
        }
    })
},

// remove Button part Start 

 removewish:(state, action)=>{
      state.value= state.value.filter(item=> item.title !== action.payload)
    }

  }
})

export const {addWish, wishIncement, wishDicement, removewish} = wishSlice.actions

export default wishSlice.reducer