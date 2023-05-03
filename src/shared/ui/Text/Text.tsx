import React, { FC, memo, ReactNode } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from 'shared/ui/Text/Text.module.scss'

export enum TextFontTheme {
  POPPINS_SEMI_BOLD = 'poppinsSemiBold',
  POPPINS_REGULAR = 'poppinsRegular',
  ROBOTO = 'roboto',
  SANS = 'sans',
  INTER_REGULAR_M = 'interRegularM',
  INTER_REGULAR_L = 'interRegularL',
  INTER_SEMI_BOLD_M = 'interSemiBoldM',
  INTER_SEMI_BOLD_L = 'interSemiBoldL',
  INTER_BOLD_M = 'interBoldM',
  INTER_BOLD_L = 'interBoldL',
  INTER_BOLD_XL = 'interBoldL',
  INTER_REGULAR_LH = 'interRegularLH',
  INTER_MEDIUM_M = 'interMediumM',
  INTER_MEDIUM_L = 'interMediumL',
}

enum TextColorTheme {
  GREY_500 = 'grey500',
  GREY_600 = 'grey600',
  DARK = 'dark',
  LIGHT = 'light',
  BLUE_500 = 'blue500',
  BLUE_600 = 'blue600',
}

interface TextProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'p'
  children: ReactNode
  className?: string
  theme?: TextFontTheme
}

export const Text: FC<TextProps> = memo(
  ({ children, tag, className = '', theme = 'poppinsSemiBold' }) => {
    const Tag = tag

    return <Tag className={classNames(cls.Text, {}, [className, cls[theme]])}>{children}</Tag>
  }
)
