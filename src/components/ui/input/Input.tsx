import { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useEffect, useState } from 'react'

import { SearchIcon } from '@/assets/icon/SearchIcon'
import { VisibilityIcon } from '@/assets/icon/VisibilityIcon'
import { VisibilityOffIcon } from '@/assets/icon/VisibilityOffIcon'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './input.module.scss'

export type InputProps = {
  errorMessage?: string
  label?: string
  onValueChange?: (value: string) => void
  type?: 'password' | 'search' | 'text'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ errorMessage, label, onValueChange, type = 'text', value, ...rest }, ref) => {
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
      if (onValueChange) {
        onValueChange(e.currentTarget.value)
      }
    }

    const handleSetShowPassword = () => {
      setShowPassword(prev => !prev)
    }

    const classNames = clsx(s.input, errorMessage && s.error)

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
            className={classNames}
            onChange={handleChangeInput}
            ref={ref}
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
            <button className={s.inputBtn} onClick={handleSetShowPassword} type={'button'}>
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          )}
        </div>
      </div>
    )
  }
)
