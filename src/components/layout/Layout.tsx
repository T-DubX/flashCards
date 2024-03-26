import { Outlet } from 'react-router-dom'

import { useGetMeQuery } from '@/services/auth'

import s from './layout.module.scss'

import { Container } from '../container'
import { Spinner } from '../ui/spinner'
import { Header, ProfileData } from './header'

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const isAuth = !isError && !isLoading

  const profile: ProfileData = {
    avatar: data?.avatar ?? '',
    email: data?.email ?? '',
    name: data?.name ?? '',
  }

  return (
    <div className={s.layout}>
      <Header isAuth={isAuth} logout={() => {}} profile={profile} />
      <main className={s.main}>
        <Container>
          {isLoading ? <Spinner className={s.spinner} /> : <Outlet context={{ isAuth }} />}
        </Container>
      </main>
    </div>
  )
}
