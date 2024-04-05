import { ChangeEvent, ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './fileUploader.module.scss'

import { Typography } from '../typography'

type Props = {
  setFile: (file: File | null) => void
  trigger: ReactNode
} & ComponentPropsWithoutRef<'input'>

export const FileUploader = forwardRef<ElementRef<'input'>, Props>(
  ({ className, setFile, trigger, ...rest }, ref) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0]

      if (file) {
        setFile(file)
      }
    }

    return (
      <Typography as={'label'} className={clsx(s.fileUploader, className)} htmlFor={''}>
        {trigger}
        <input
          accept={'image/jpeg, image/jpg, image/png, image/webp'}
          className={s.inputUploader}
          onChange={handleChange}
          ref={ref}
          type={'file'}
          {...rest}
        />
      </Typography>
    )
  }
)
