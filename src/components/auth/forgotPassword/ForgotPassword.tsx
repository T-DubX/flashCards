import { useForm } from 'react-hook-form'

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
          <Button className={s.sendBtn} value={'primary'}>
            Send Instructions
          </Button>
        </form>
        <div className={s.description}>
          <Typography className={s.title} variant={'body2'}>
            Did you remember your password?
          </Typography>
          <Button as={'a'} className={s.link} variant={'link'}>
            Try logging in
          </Button>
        </div>
      </div>
    </Card>
  )
}
