import { ComponentPropsWithoutRef } from 'react'

import s from './dropDownMenuItem.module.scss'

import { DropdownMenu } from '.'

type Props = ComponentPropsWithoutRef<typeof DropdownMenu.Item>
export const DropDownMenuItem = (props: Props) => {
  const { ...rest } = props

  return <DropdownMenu.Item className={s.item} {...rest} />
}
