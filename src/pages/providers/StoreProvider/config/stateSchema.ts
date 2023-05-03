import { LoginSchema } from 'features/loginByPassword'
import { rtkApi } from 'shared/api/rtkApi'

export interface StateSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
  login: LoginSchema
}
