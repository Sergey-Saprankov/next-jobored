import { useEffect } from 'react'

import { useSelector } from 'react-redux'

import { DataSchema, getAccessToken, MainPage, MainPageSchema, setData } from 'pagesLayer/MainPage'
import { _API_, client_id, client_secret, headers, hr, login, password } from 'shared/const/baseUrl'
import { useAppDispatch } from 'shared/hooks/useAppDispatch'

export const getServerSideProps = async () => {
  const res = await fetch(
    `${_API_}/2.0/oauth2/password/?login=${login}&password=${password}&client_id=${client_id}&client_secret=${client_secret}&hr=${hr}`,
    {
      headers: headers,
      method: 'GET',
    }
  )

  const data: DataSchema = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { props: { data } }
}

export default function Home({ data }: MainPageSchema) {
  const dispatch = useAppDispatch()
  const tok = useSelector(getAccessToken)

  console.log(tok)

  useEffect(() => {
    dispatch(setData({ data }))
  }, [dispatch])

  return <MainPage />
}
