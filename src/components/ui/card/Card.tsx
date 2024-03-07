import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './card.module.scss'

export type Props<T extends ElementType = 'div'> = {
  as?: T
  children: ReactNode
} & ComponentPropsWithoutRef<T>

export const Card = (props: Props) => {
  const { as: Component = 'div', children, className, title, ...rest } = props

  return (
    <Component className={`${className ? className : ''} ${s.wrapperCard} `} {...rest}>
      <div className={s.content}>{children}</div>
    </Component>
  )
}
