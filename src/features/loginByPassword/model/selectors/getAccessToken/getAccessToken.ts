import { StateSchema } from 'pages/providers/StoreProvider/config/stateSchema'

export const getAccessToken = (state: StateSchema) => state.login.access_token
