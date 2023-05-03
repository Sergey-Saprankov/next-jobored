import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC, memo } from 'react'

import cls from './Button.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

enum ButtonTheme {
  Clear = 'clear',
  EXTRA_LARGE = 'extraLarge',
  LARGE = 'large',
  Medium = 'medium',
  SMALL = 'small',
}

interface ButtonProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  theme: ButtonTheme
}
export const Button: FC<ButtonProps> = memo(
  ({ theme = 'medium', children, className = '', ...otherProps }) => {
    return (
      <button {...otherProps} className={classNames(cls.Button, {}, [className, cls[theme]])}>
        {children}
      </button>
    )
  }
)
