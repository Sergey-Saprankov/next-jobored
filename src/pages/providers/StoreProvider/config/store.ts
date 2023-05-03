import { configureStore } from '@reduxjs/toolkit'
import { ReducersMapObject } from 'redux'

import { StateSchema } from 'pages/providers/StoreProvider/config/stateSchema'
import { mainPageReducer } from 'pagesLayer/MainPage'
import { rtkApi } from 'shared/api/rtkApi'

export const createStore = () => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    [rtkApi.reducerPath]: rtkApi.reducer,
    mainPage: mainPageReducer,
  }

  return configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rtkApi.middleware),
  })
}

export type AppDispatch = ReturnType<typeof createStore>['dispatch']
