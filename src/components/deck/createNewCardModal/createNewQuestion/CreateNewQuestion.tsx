import { useRef } from 'react'
import { Control, useFormContext } from 'react-hook-form'

import { ImageOutline } from '@/assets/icon/ImageOutline'
import { Button, FormInput } from '@/components/auth/forgotPassword'
import { FileUploader } from '@/components/ui/fileUploader'
import { Typography } from '@/components/ui/typography'

import s from './createNewQuestion.module.scss'

import { FormValues } from '../CreateNewCardModal'

type Props = {
  control: Control<FormValues>
  questionImg: File | null
  setQuestionImg: (file: File | null) => void
}

export const CreateNewQuestion = ({ control, questionImg, setQuestionImg }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null)

  const handleQuestionUpload = () => {
    fileRef.current?.click()
  }

  const trigger = (
    <Button
      as={'span'}
      className={s.trigger}
      fullWidth
      onClick={handleQuestionUpload}
      variant={'secondary'}
    >
      <ImageOutline />
      <Typography className={s.triggerText} variant={'subtitle2'}>
        Upload Image
      </Typography>
    </Button>
  )

  return (
    <div className={s.block}>
      <Typography className={s.modalHeader} variant={'subtitle2'}>
        Question:
      </Typography>
      <div className={s.wrapperTextField}>
        <FormInput
          className={s.textField}
          control={control}
          label={'Question?'}
          name={'question'}
        />
      </div>
      {questionImg && (
        <img alt={'question'} className={s.img} src={URL.createObjectURL(questionImg)} />
      )}
      <FileUploader ref={fileRef} setFile={setQuestionImg} trigger={trigger} />
    </div>
  )
}
