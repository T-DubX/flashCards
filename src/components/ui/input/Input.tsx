import { ChangeEvent, ComponentPropsWithoutRef, useEffect, useState } from 'react'

import { SearchIcon } from '@/assets/icon/SearchIcon'
import { VisibilityIcon } from '@/assets/icon/VisibilityIcon'
import { VisibilityOffIcon } from '@/assets/icon/VisibilityOffIcon'
import { Typography } from '@/components/ui/typography'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  onChange?: (value: string) => void
  type?: 'password' | 'search' | 'text'
} & Omit<ComponentPropsWithoutRef<'input'>, 'onChange'>
export const Input = (props: InputProps) => {
  const { errorMessage, label, onChange, type = 'text', value, ...rest } = props

  const [showPassword, setShowPassword] = useState(false)
  const [currentType, setCurrentType] = useState(type)

  const isShowSearch = type === 'search'
  const isShowButton = type === 'password'

  useEffect(() => {
    if (isShowButton && showPassword) {
      setCurrentType('text')
    } else if (isShowButton && !showPassword) {
      setCurrentType('password')
    }
  }, [isShowButton, showPassword])

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.currentTarget.value)
    }
  }

  const handleSetShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <div className={s.wrapper}>
      {label && (
        <Typography
          as={'label'}
          className={`${s.label} ${rest.disabled ? s.disabled : ''}`}
          variant={'body2'}
        >
          {label}
        </Typography>
      )}
      <div className={s.wrapperInput}>
        <input
          className={`${s.input} ${errorMessage ? s.error : ''}`}
          onChange={handleChangeInput}
          type={currentType}
          value={value}
          {...rest}
        />
        {isShowSearch && (
          <div className={s.wrapperSearchIcon}>
            <SearchIcon />
          </div>
        )}
        {errorMessage && (
          <Typography as={'span'} className={s.errorMessage} variant={'caption'}>
            {errorMessage}
          </Typography>
        )}
        {isShowButton && (
          <button className={s.inputBtn} onClick={handleSetShowPassword}>
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </button>
        )}
      </div>
    </div>
  )
}
