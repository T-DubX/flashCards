import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './typography.module.scss'

export type TypographyProps<T extends ElementType> = {
  as?: T
  children?: ReactNode
  className?: string
  theme?: 'dark' | 'light'
  variant?:
    | 'body1'
    | 'body2'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'link1'
    | 'link2'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
} & ComponentPropsWithoutRef<T>

export const Typography = <T extends ElementType = 'p'>(props: TypographyProps<T>) => {
  const { as: Component = 'p', className, theme = 'dark', variant = 'body1', ...rest } = props

  const classNames = clsx(
    theme === 'dark' ? s.typographyDark : s.typographyLight,
    s[variant],
    className
  )

  return <Component className={classNames} {...rest} />
}
