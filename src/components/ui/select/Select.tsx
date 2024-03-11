import { ComponentPropsWithoutRef, ElementRef, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'

import s from './select.module.scss'

import { ArrowDown, SelectRadix, Typography } from '.'

type Option = {
  disabled: boolean
  label: string
  value: string
}

export type Props = {
  label?: string
  options: Option[]
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = forwardRef<ElementRef<typeof SelectRadix.Root>, Props>((props, ref) => {
  const { defaultValue, disabled, label, options, value, ...rest } = props

  const classNameForSpan = clsx(s.label, disabled && s.disabled)

  const itemsToChoose = options.map((option, idx) => (
    <SelectRadix.Item className={s.item} disabled={option.disabled} key={idx} value={option.value}>
      <SelectRadix.ItemText className={s.itemText}>{option.label}</SelectRadix.ItemText>
    </SelectRadix.Item>
  ))

  return (
    <div className={s.wrapperSelect}>
      {label && (
        <Typography as={'span'} className={classNameForSpan} variant={'body2'}>
          {label}
        </Typography>
      )}
      <SelectRadix.Root
        defaultValue={defaultValue ?? options[0].label}
        disabled={disabled}
        value={value}
        {...rest}
      >
        <SelectRadix.Trigger className={s.trigger} ref={ref}>
          <SelectRadix.Value className={s.value} />
          <SelectRadix.Icon>
            <ArrowDown />
          </SelectRadix.Icon>
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content className={s.content} position={'popper'}>
            <SelectRadix.Viewport className={s.viewport}>
              <SelectRadix.Group className={s.group}>{itemsToChoose}</SelectRadix.Group>
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
})
