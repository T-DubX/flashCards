import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './forgotPassword.module.scss'

import { Button, Card, FormInput, Typography } from '.'

type Props = {
  onSubmit: (data: FormValues) => void
}

type FormValues = z.infer<typeof schema>

const schema = z.object({
  email: z.string().email(),
})

export const ForgotPassword = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.card}>
      <div className={s.content}>
        <Typography className={s.forgotPasswordHeader} variant={'h1'}>
          Forgot Password
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <FormInput
            control={control}
            errorMessage={errors.email?.message}
            label={'Email'}
            name={'email'}
          />
          <Typography variant={'body2'}>
            Enter your email address and we will send you further instructions
          </Typography>
          <Button className={s.sendBtn} type={'submit'} variant={'primary'}>
            Send Instructions
          </Button>
        </form>
        <div className={s.description}>
          <Typography className={s.title} variant={'body2'}>
            Did you remember your password?
          </Typography>
          <Button as={Link} className={s.link} to={'/login'} variant={'link'}>
            Try logging in
          </Button>
        </div>
      </div>
    </Card>
  )
}
