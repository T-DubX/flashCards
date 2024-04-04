import { ComponentPropsWithoutRef } from 'react'

import { Star } from '@/assets/icon/Star'
import { StarOutline } from '@/assets/icon/StarOutline'
import clsx from 'clsx'

import s from './rating.module.scss'

type Props = {
  maxRating?: number
  rating: number
} & ComponentPropsWithoutRef<'div'>

export const Rating = ({ maxRating = 5, rating, ...rest }: Props) => {
  const stars = [...Array.from({ length: maxRating })].map((_, idx) => idx + 1)

  return (
    <div className={clsx(s.wrapperRating, rest.className)} {...rest}>
      {stars.map((star, idx) => {
        return rating >= star ? <Star key={idx} /> : <StarOutline key={idx} />
      })}
    </div>
  )
}
