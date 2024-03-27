import { Outlet } from 'react-router-dom'

import { profileData } from '@/common/utils'
import { useGetMeQuery } from '@/services/auth'

import s from './layout.module.scss'

import { Container } from '../container'
import { Spinner } from '../ui/spinner'
import { Header } from './header'

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const isAuth = !isError && !isLoading

  const profile = profileData(data)

  return (
    <div className={s.layout}>
      <Header isAuth={isAuth} logout={() => {}} profile={profile} />
      <main className={s.main}>
        <Container className={s.container}>
          {isLoading ? <Spinner className={s.spinner} /> : <Outlet context={{ isAuth }} />}
        </Container>
      </main>
    </div>
  )
}
