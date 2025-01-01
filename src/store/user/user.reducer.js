import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "users",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

// Pulling off Actions we want From userSlice
// Action is the { (Deconstructed = setCurrentUser) }
// Getting it off - userSlice.actions
// .actions is one of the Properties from the Object Return off of createSlice
//  - containes all of the actions that we write inside of our Slice.
//  - allowys us to access the actions that we write within the reducers.
// This is an Action that we Get Back.

export const { setCurrentUser } = userSlice.actions

// Next Thing is we want the Reducer Itself.
// Need to pass it to Our RootReducer in order to actually build out this Slice of User.
// Under another NameSpace
// .reducer another Property off of createSlice
//  - You get the Actual Reducer Function that Gets Generated from createSlice.

export const userReducer = userSlice.reducer