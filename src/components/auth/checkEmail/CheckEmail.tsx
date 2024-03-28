import { Link } from 'react-router-dom'

import s from './checkEmail.module.scss'

import { Button, Card, Email, Typography } from '.'

type Props = {
  email: string
}

export const CheckEmail = ({ email }: Props) => {
  return (
    <Card className={s.card}>
      <div className={s.content}>
        <Typography className={s.cardTitle} variant={'h1'}>
          Check Email
        </Typography>
        <div className={s.wrapperIcon}>
          <Email />
        </div>
        <Typography className={s.description} variant={'body2'}>
          We’ve sent an Email with instructions {email}
        </Typography>
        <Button as={Link} fullWidth to={'/login'} variant={'primary'}>
          Back to Sign In
        </Button>
      </div>
    </Card>
  )
}
