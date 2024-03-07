import { ComponentPropsWithoutRef } from 'react'

import s from './separator.module.scss'

import { DropdownMenu } from '.'

type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Separator>
export const Separator = (props: Props) => {
  const { ...rest } = props

  return <DropdownMenu.Separator className={s.separator} {...rest} />
}
