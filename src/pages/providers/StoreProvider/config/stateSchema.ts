import { MainPageSchema } from 'pagesLayer/MainPage'
import { rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  mainPage: MainPageSchema
}
