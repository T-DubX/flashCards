import s from './profileInfo.module.scss'

import { Button, EditTwoOutline, LogOutIcon, Typography } from '.'

type Props = {
  activeEditMode: () => void
  email?: string
  logout: () => void
  name?: string
}

export const ProfileInfo = ({ activeEditMode, email, logout, name }: Props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapperName}>
        <Typography className={s.name} variant={'h2'}>
          {name}
        </Typography>

        <EditTwoOutline className={s.edit} height={'16'} onClick={activeEditMode} width={'16'} />
      </div>
      <Typography className={s.email} variant={'body2'}>
        {email}
      </Typography>
      <Button onClick={logout} variant={'secondary'}>
        <LogOutIcon height={'16'} width={'16'} />
        Logout
      </Button>
    </div>
  )
}
