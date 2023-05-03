import { useDispatch } from 'react-redux'

import { AppDispatch } from 'pages/providers/StoreProvider/config/store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
