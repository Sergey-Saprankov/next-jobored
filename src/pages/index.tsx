import { useEffect } from 'react'

import { setAccessToken } from 'features/loginByPassword'
import { MainPage } from 'pagesLayer/MainPage'
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

  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return { props: { data } }
}

interface HomeProps {
  data: {
    access_token: string
    refresh_token: string
    ttl: number
    expires_in: number
    token_type: string
    reg_user_resumes_count: number
  }
}

export default function Home({ data }: HomeProps) {
  const dispatch = useAppDispatch()
  const { access_token } = data

  useEffect(() => {
    dispatch(setAccessToken(access_token))
  }, [dispatch])

  return <MainPage />
}
