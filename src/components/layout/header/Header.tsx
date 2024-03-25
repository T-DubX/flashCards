import { Link } from 'react-router-dom'

import { Logo } from '@/assets/icon/Logo'
import { HeaderDropDown } from '@/components/layout/header/headerDropDown'
import { Button } from '@/components/ui/button'

import s from './header.module.scss'

export type ProfileData = {
  avatar: string
  email: string
  name: string
}

type Props = {
  isAuth: boolean
  logout: () => void
  profile: ProfileData
}

export const Header = ({ isAuth, logout, profile }: Props) => {
  return (
    <header className={s.header}>
      <Link to={'/'}>
        <Logo />
      </Link>

      {isAuth ? (
        <HeaderDropDown logout={logout} profileData={profile} />
      ) : (
        <Button variant={'secondary'}>Sign In</Button>
      )}
    </header>
  )
}
