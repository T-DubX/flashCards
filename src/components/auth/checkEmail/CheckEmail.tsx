import s from './checkEmail.module.scss'

import { Button, Card, Email, Typography } from '.'

export const CheckEmail = () => {
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
          We’ve sent an Email with instructions to example@mail.com
        </Typography>
        <Button as={'a'} fullWidth variant={'primary'}>
          Back to Sign In
        </Button>
      </div>
    </Card>
  )
}