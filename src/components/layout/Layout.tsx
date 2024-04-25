import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { profileData } from '@/common/utils'
import { useGetMeQuery } from '@/services/auth'
import { isLoading as Loading } from '@/services/decks'

import s from './layout.module.scss'

import { Container } from '../container'
import { Loader } from '../ui/loader'
import { Header } from './header'

export const Layout = () => {
  const { data, isError, isLoading } = useGetMeQuery()
  const isAuth = !isError && !isLoading
  const isLoadings = useSelector(Loading)

  const profile = profileData(data)

  return (
    <div className={s.layout}>
      <Header isAuth={isAuth} profile={profile} />
      <main className={s.main}>
        {isLoadings && <Loader />}
        <Container className={s.container}>
          {!isLoading && <Outlet context={{ isAuthenticated: isAuth }} />}
        </Container>
      </main>
    </div>
  )
}
