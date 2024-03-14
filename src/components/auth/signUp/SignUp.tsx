import { useForm } from 'react-hook-form'

import { Card } from '@/components/ui/card/Card'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from '@/components/auth/signUp/signUp.module.scss'

import { FormInput, Typography } from '.'
import { Button } from '../signIn'

type Props = {
  onSubmit: (data: Omit<FormType, 'passwordConfirmation'>) => void
}

type FormType = z.infer<typeof schema>

const schema = z
  .object({
    confirmPassword: z.string(),
    email: z.string().email(),
    password: z.string().min(6).max(30),
  })
  .refine(date => date.password === date.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export const SignUp = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>({
    defaultValues: {
      confirmPassword: '',
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  })

  return (
    <Card className={s.card}>
      <div className={s.content}>
        <Typography className={s.signUpHeader} variant={'body1'}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
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
            <FormInput
              control={control}
              errorMessage={errors.confirmPassword?.message}
              label={'Confirm Password'}
              name={'confirmPassword'}
              type={'password'}
            />
          </div>

          <Button fullWidth type={'submit'} variant={'primary'}>
            Sign Up
          </Button>
        </form>
        <div className={s.description}>
          <Typography className={s.title} variant={'body2'}>
            Already have an account?
          </Typography>
          <Button as={'a'} className={s.link} variant={'link'}>
            Sign In
          </Button>
        </div>
      </div>
    </Card>
  )
}
