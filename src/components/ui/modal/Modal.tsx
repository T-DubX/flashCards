import { ComponentPropsWithoutRef, ReactNode } from 'react'

import { Typography } from '@/components/ui/typography'

import s from './modal.module.scss'

import { Card, CloseIcon, Dialog } from '.'

export type Props = {
  children: ReactNode
  title?: string
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = (props: Props) => {
  const { children, title, ...rest } = props

  return (
    <Dialog.Root {...rest}>
      <Dialog.Portal>
        <Dialog.Content className={s.content}>
          <Card className={s.card}>
            {title && (
              <div className={s.wrapperTitle}>
                <Typography as={'h3'} className={s.title} variant={'h3'}>
                  {title}
                </Typography>
                <Dialog.Close className={s.close}>
                  <CloseIcon />
                </Dialog.Close>
              </div>
            )}
            <div className={s.wrapperChildren}>{children}</div>
          </Card>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
