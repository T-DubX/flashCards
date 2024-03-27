import { ReactNode } from 'react'

import s from './dropDownMenu.module.scss'

import { DropdownMenu } from '.'

export type Props = {
  align?: 'center' | 'end' | 'start'
  children: ReactNode
  trigger: ReactNode
}

export const DropDownMenu = (props: Props) => {
  const { align = 'end', children, trigger } = props

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className={s.trigger}>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content align={align} className={s.content} sideOffset={10}>
          {children}
          <DropdownMenu.Arrow asChild className={s.arrow} end={align} height={8} width={16}>
            <div></div>
          </DropdownMenu.Arrow>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
