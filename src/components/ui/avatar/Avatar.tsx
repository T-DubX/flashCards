import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as AvatarRadix from '@radix-ui/react-avatar'
import clsx from 'clsx'

import s from './avatar.module.scss'

export type AvatarProps = {
  size?: 'large' | 'small'
  src?: string
} & ComponentPropsWithoutRef<typeof AvatarRadix.Root>

export const Avatar = forwardRef<ElementRef<typeof AvatarRadix.Root>, AvatarProps>(
  ({ className, size = 'large', src, title, ...rest }, ref) => {
    const classNames = clsx(s.wrapperAvatar, s[size], className)

    return (
      <AvatarRadix.Root className={classNames} ref={ref} {...rest}>
        <AvatarRadix.Image alt={'avatar'} className={s.image} src={src} />
        <AvatarRadix.Fallback className={s.fallback}>
          {src ? title : size === 'large' && 'None'}
        </AvatarRadix.Fallback>
      </AvatarRadix.Root>
    )
  }
)
