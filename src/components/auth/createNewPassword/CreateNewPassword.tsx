import { useForm } from 'react-hook-form'

import { z } from 'zod'

import s from './createNewPassword.module.scss'

import { Button, Card, FormInput, Typography } from '../forgotPassword'

type Props = {
  onSubmit: (data: FormValues) => void
}

type FormValues = z.infer<typeof schema>

const schema = z.object({
  password: z.string().min(6).max(30),
})

export const CreateNewPassword = (props: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      password: '',
    },
  })

  return (
    <Card className={s.card}>
      <div className={s.content}>
        <Typography className={s.cardTitle} variant={'h1'}>
          Create new password
        </Typography>
        <form onSubmit={handleSubmit(props.onSubmit)}>
          <FormInput
            control={control}
            errorMessage={errors.password?.message}
            label={'Password'}
            name={'password'}
            type={'password'}
          />
          <Typography className={s.description} variant={'body2'}>
            Create new password and we will send you further instructions to email
          </Typography>
          <Button fullWidth type={'submit'} variant={'primary'}>
            Create New Password
          </Button>
        </form>
      </div>
    </Card>
  )
}
