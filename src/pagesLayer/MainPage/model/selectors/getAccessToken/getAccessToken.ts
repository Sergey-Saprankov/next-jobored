import { StateSchema } from 'pages/providers/StoreProvider/config/stateSchema'

export const getAccessToken = (state: StateSchema) => state.mainPage.data.access_token
