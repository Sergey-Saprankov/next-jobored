import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MainPageSchema } from 'pagesLayer/MainPage/model/types/MainPageSchema'

const initialState: MainPageSchema = {
  data: {
    access_token: '',
    refresh_token: '',
    token_type: '',
    ttl: null,
    expires_in: null,
    reg_user_resumes_count: null,
  },
}

export const mainPageSlice = createSlice({
  name: 'mainPage',
  initialState: initialState,
  reducers: {
    setData: (state, action: PayloadAction<MainPageSchema>) => {
      state.data = action.payload.data
    },
  },
})

export const { reducer: mainPageReducer } = mainPageSlice
export const { setData } = mainPageSlice.actions
