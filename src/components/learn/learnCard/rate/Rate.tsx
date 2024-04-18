import { useForm } from 'react-hook-form'

import { Button } from '@/components/auth/forgotPassword'
import { FormRadioGroup } from '@/components/ui/formComponents/formRadio/FormRadio'
import { Option, Typography } from '@/components/ui/radioGroup'
import clsx from 'clsx'

import s from './rate.module.scss'

export type Grade = {
  grade: '1' | '2' | '3' | '4' | '5' | 1 | 2 | 3 | 4 | 5 | string
}

type Props = {
  className?: string
  handleHideAnswer: () => void
  onSubmit: (data: Grade) => void
}

export const Rate = ({ className, onSubmit }: Props) => {
  const options: Option[] = [
    { disabled: false, label: 'Did not know', value: '1' },
    { disabled: false, label: 'Forgot', value: '2' },
    { disabled: false, label: 'A lot of thought', value: '3' },
    { disabled: false, label: 'Сonfused', value: '4' },
    { disabled: false, label: 'Knew the answer', value: '5' },
  ]

  const { control, handleSubmit } = useForm({
    defaultValues: {
      grade: '1',
    },
  })

  return (
    <form className={clsx(s.form, className)} onSubmit={handleSubmit(onSubmit)}>
      <Typography className={s.title} variant={'subtitle1'}>
        Rate yourself:
      </Typography>

      <FormRadioGroup className={s.radioGroup} control={control} name={'grade'} options={options} />
      <Button fullWidth type={'submit'}>
        Next Question
      </Button>
    </form>
  )
}
