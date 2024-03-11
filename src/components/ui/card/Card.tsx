import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

export type Props<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Card = (props: Props) => {
  const { as: Component = 'div', children, className, title, ...rest } = props

  const classNames = clsx(className && className, s.wrapperCard)

  return (
    <Component className={classNames} {...rest}>
      <div className={s.content}>{children}</div>
    </Component>
  )
}
