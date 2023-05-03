import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

import { _API_ } from 'shared/const/baseUrl'

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: _API_,
    headers: {
      'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    },
  }),
  endpoints: () => ({}),
})
