import { ComponentPropsWithoutRef } from 'react'

import s from './select.module.scss'

import { ArrowDown, SelectRadix, Typography } from '.'

type Option = {
  disabled: boolean
  value: string
}

export type Props = {
  label?: string
  options: Option[]
} & ComponentPropsWithoutRef<typeof SelectRadix.Root>

export const Select = (props: Props) => {
  const { defaultValue, disabled, label, options, ...rest } = props

  const itemsToChoose = options.map((option, idx) => (
    <SelectRadix.Item className={s.item} disabled={option.disabled} key={idx} value={option.value}>
      <SelectRadix.ItemText className={s.itemText}>{option.value}</SelectRadix.ItemText>
    </SelectRadix.Item>
  ))

  return (
    <div className={s.wrapperSelect}>
      {label && (
        <Typography
          as={'span'}
          className={`${s.label} ${disabled && s.disabled}`}
          variant={'body2'}
        >
          {label}
        </Typography>
      )}
      <SelectRadix.Root
        defaultValue={defaultValue ?? options[0].value}
        disabled={disabled}
        {...rest}
      >
        <SelectRadix.Trigger className={s.trigger}>
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
}
