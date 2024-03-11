import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

import { CheckIcon, Typography } from './index'

export type CheckboxProps = {
  label?: string
} & ComponentPropsWithoutRef<typeof CheckboxRadix.Root>

export const Checkbox = forwardRef<ElementRef<typeof CheckboxRadix.Root>, CheckboxProps>(
  ({ disabled, id, label, ...rest }, ref) => {
    return (
      <div className={s.wrapper}>
        <CheckboxRadix.Root className={s.checkbox} disabled={disabled} id={id} ref={ref} {...rest}>
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
)
