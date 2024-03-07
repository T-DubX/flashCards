import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './dropDownMenuStandartItem.module.scss'

import { DropdownMenu } from '.'

type Props = {
  icon: ReactNode
  value: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropDownMenuStandardItem = (props: Props) => {
  const { icon, value, ...rest } = props

  return (
    <DropdownMenu.Item className={s.standardItem} {...rest}>
      {icon}
      <Typography className={s.value}>{value}</Typography>
    </DropdownMenu.Item>
  )
}
