import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("here")
      state.currentUser = action.payload;
      console.log(state.currentUser)
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
