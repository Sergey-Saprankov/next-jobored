import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { LoginSchema } from '../types/LoginSchema'

import { MainPageSchema } from 'pagesLayer/MainPage/model/types/MainPageSchema'

const initialState: LoginSchema = {
  access_token: '',
}

export const loginSlice = createSlice({
  name: 'mainPage',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload
    },
  },
})

export const { reducer: loginReducer } = loginSlice
export const { setAccessToken } = loginSlice.actions
