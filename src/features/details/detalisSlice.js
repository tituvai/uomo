import { createSlice } from '@reduxjs/toolkit'

export const detalisSlice = createSlice({
  name: 'details',
  initialState: {
    value: null,
  },
  reducers: {
     details: (state, action) => {
        state.value = {...action.payload}
     }
        





  }
})

export const {details} = detalisSlice.actions

export default detalisSlice.reducer