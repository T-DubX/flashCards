import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './dropDownMenuStandartItem.module.scss'

import { DropdownMenu } from '.'

type Props = {
  className?: string
  icon: ReactNode
  value: string
} & ComponentPropsWithoutRef<typeof DropdownMenu.Item>

export const DropDownMenuStandardItem = (props: Props) => {
  const { className, icon, value, ...rest } = props

  return (
    <DropdownMenu.Item className={clsx(s.standardItem, className)} {...rest}>
      {icon}
      <Typography className={s.value} variant={'caption'}>
        {value}
      </Typography>
    </DropdownMenu.Item>
  )
}
