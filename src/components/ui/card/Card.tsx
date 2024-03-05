import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './card.module.scss'

export type Props<T extends ElementType = 'div'> = {
  children: ReactNode
  title?: string
} & ComponentPropsWithoutRef<T>

export const Card = (props: Props) => {
  const { children, title } = props

  return (
    <div className={s.wrapperCard}>
      <div className={s.cardTitle}>{title}</div>
      <div className={s.content}>{children}</div>
    </div>
  )
}
