import { Link } from 'react-router-dom'

import { Container } from '@/components/container'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import s from './errorPage.module.scss'

import errorImg from '../../assets/404.png'

export const ErrorPage = () => {
  return (
    <div className={s.errorPage}>
      <Container className={s.containerErrorPage}>
        <img alt={''} className={s.errorImg} src={errorImg} />
        <Typography variant={'body1'}>Sorry! Page not found!</Typography>
        <Button as={Link} to={'/'} variant={'primary'}>
          Back to home page
        </Button>
      </Container>
    </div>
  )
}
