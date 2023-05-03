import React, { FC, memo, ReactNode } from 'react'

import cls from './Wrapper.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface WrapperProps {
  children: ReactNode
}

export const Wrapper: FC<WrapperProps> = memo(({ children }) => {
  return <div className={classNames(cls.Wrapper)}>{children}</div>
})
