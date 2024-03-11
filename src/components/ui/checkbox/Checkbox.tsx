import { ComponentPropsWithoutRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { CheckIcon, Typography } from './index'

export type CheckboxProps = {
  disabled?: boolean
  id: string
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = (props: CheckboxProps) => {
  const { disabled, id, label, ...rest } = props

  return (
    <div className={s.wrapper}>
      <CheckboxRadix.Root className={s.checkbox} disabled={disabled} id={id} {...rest}>
        <CheckboxRadix.Indicator className={s.check}>
          <CheckIcon />
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <Typography as={'label'} htmlFor={id} variant={'body2'}>
        {label}
      </Typography>
    </div>
  )
}
