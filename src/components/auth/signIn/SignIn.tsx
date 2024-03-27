import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './signIn.module.scss'

import { Button, Card, FormCheckbox, FormInput, Typography } from '.'

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(30),
  rememberMe: z.boolean().default(false),
})

export type FormValues = z.infer<typeof loginSchema>

export type SignInProps = {
  onSubmit: (data: FormValues) => void
}

export const SignIn = ({ onSubmit }: SignInProps) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Card className={s.card}>
      <div className={s.content}>
        <Typography className={s.signInHeader} variant={'h1'}>
          Sign In
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={s.wrapperInputs}>
            <FormInput
              control={control}
              errorMessage={errors.email?.message}
              label={'Email'}
              name={'email'}
            />
            <FormInput
              control={control}
              errorMessage={errors.password?.message}
              label={'Password'}
              name={'password'}
              type={'password'}
            />
          </div>

          <FormCheckbox control={control} label={'Remember me'} name={'rememberMe'} />
          <div className={s.wrapperForgotPass}>
            <Typography as={'a'} variant={'body2'}>
              Forgot Password?
            </Typography>
          </div>

          <Button className={s.signInBtn} fullWidth type={'submit'} variant={'primary'}>
            Sign In
          </Button>
          <div className={s.description}>
            <Typography className={s.title} variant={'body2'}>
              Don&apos;t have an account?
            </Typography>
            <Button as={Link} className={s.signUpLink} to={'/signUp'} variant={'link'}>
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </Card>
  )
}
