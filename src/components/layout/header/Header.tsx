import { Link } from 'react-router-dom'

import { Logo } from '@/assets/icon/Logo'
import { Container } from '@/components/container'
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
  profile: ProfileData
}

export const Header = ({ isAuth, profile }: Props) => {
  return (
    <header className={s.header}>
      <Container className={s.headerConatiner}>
        <Link className={s.logo} to={'/'}>
          <Logo />
        </Link>

        {isAuth ? (
          <HeaderDropDown profileData={profile} />
        ) : (
          <Button as={Link} to={'login'} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </Container>
    </header>
  )
}
