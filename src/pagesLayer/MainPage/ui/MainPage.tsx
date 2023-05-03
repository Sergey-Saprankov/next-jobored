import React from 'react'

import cls from './MainPage.module.scss'

import { _API_, client_id, client_secret, headers, hr, login, password } from 'shared/const/baseUrl'
import { classNames } from 'shared/lib/classNames/classNames'
import { Wrapper } from 'shared/ui/Wrapper/Wrapper'

export const MainPage = () => {
  return (
    <div className={classNames(cls.Main, {}, [])}>
      <Wrapper>
        <div className={cls.innerWrapper}></div>
      </Wrapper>
    </div>
  )
}
