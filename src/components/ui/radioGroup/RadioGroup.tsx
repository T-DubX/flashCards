import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './radioGroup.module.scss'

import { RadioGroupRadix, Typography } from '.'

export type Option = {
  disabled: boolean
  label: string
  value: string
}

export type RadioProps = {
  disabledAll?: boolean
  options: Option[]
} & ComponentPropsWithoutRef<typeof RadioGroupRadix.Root>

export const RadioGroup = forwardRef<ElementRef<typeof RadioGroupRadix.Root>, RadioProps>(
  ({ className, disabledAll, options, ...rest }, ref) => {
    return (
      <div>
        <RadioGroupRadix.Root
          className={clsx(s.radioRoot, className)}
          disabled={disabledAll}
          ref={ref}
          {...rest}
        >
          {options.map((option, idx) => (
            <div className={s.wrapperBox} key={idx}>
              <RadioGroupRadix.Item
                className={s.radioItem}
                disabled={option.disabled}
                id={option.value}
                value={option.value}
              >
                <RadioGroupRadix.Indicator className={s.radioIndicator} />
              </RadioGroupRadix.Item>
              <Typography as={'label'} className={s.label} htmlFor={option.value} variant={'body2'}>
                {option.label}
              </Typography>
            </div>
          ))}
        </RadioGroupRadix.Root>
      </div>
    )
  }
)
