import React from 'react'

import cls from './Header.module.scss'

import Logo from 'shared/assets/icon/logo.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { NavLink } from 'shared/ui/NavLink/NavLink'
import { Text, TextFontTheme } from 'shared/ui/Text/Text'
import { Wrapper } from 'shared/ui/Wrapper/Wrapper'

export const Header = () => {
  return (
    <header className={classNames(cls.Header)}>
      <Wrapper>
        <div className={cls.innerWrapper}>
          <div className={cls.logoContainer}>
            <Logo />
            <Text tag={'p'} theme={TextFontTheme.POPPINS_SEMI_BOLD}>
              Jobored
            </Text>
          </div>
          <div>
            <NavLink text={'Поиск Вакансий'} href={'/'} className={cls.mr60} />
            <NavLink text={'Избранное'} href={'/select'} />
          </div>
        </div>
      </Wrapper>
    </header>
  )
}
