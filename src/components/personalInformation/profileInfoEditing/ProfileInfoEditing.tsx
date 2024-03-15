import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { z } from 'zod'

import s from './profileInfoEditing.module.scss'

import { Button, FormInput } from '.'

type Props = {
  className?: string
  deactivateEditMode: () => void
  initialValue?: string
  updateNickname: (data: FormValues) => void
}

export type FormValues = z.infer<typeof schema>

const schema = z.object({
  nickname: z.string().min(3).trim(),
})

export const ProfileInfoEditing = ({
  className,
  deactivateEditMode,
  initialValue = '',
  updateNickname,
}: Props) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    defaultValues: {
      nickname: initialValue,
    },
    resolver: zodResolver(schema),
  })

  const handleOnSubmit = (data: FormValues) => {
    updateNickname(data)
    deactivateEditMode()
  }

  return (
    <form className={clsx(s.form, className)} onSubmit={handleSubmit(handleOnSubmit)}>
      <FormInput
        control={control}
        errorMessage={errors.nickname?.message}
        label={'Nickmame'}
        name={'nickname'}
      />
      <Button fullWidth type={'submit'} variant={'primary'}>
        Save Changes
      </Button>
    </form>
  )
}
