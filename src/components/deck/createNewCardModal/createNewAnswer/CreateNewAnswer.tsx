import { useRef } from 'react'
import { Control, useFormContext } from 'react-hook-form'

import { ImageOutline } from '@/assets/icon/ImageOutline'
import { Button, FormInput } from '@/components/auth/forgotPassword'
import { FileUploader } from '@/components/ui/fileUploader'
import { Typography } from '@/components/ui/typography'

import s from './createNewAnswer.module.scss'

import { FormValues } from '../CreateNewCardModal'

type Props = {
  answerImg: File | null
  control: Control<FormValues>
  setAnswerImg: (file: File | null) => void
}

export const CreateNewAnswer = ({ answerImg, control, setAnswerImg }: Props) => {
  const answerFileRef = useRef<HTMLInputElement>(null)

  const handleAnswerUpload = () => {
    answerFileRef.current?.click()
  }

  const trigger = (
    <Button
      as={'span'}
      className={s.trigger}
      fullWidth
      onClick={handleAnswerUpload}
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
        Answer:
      </Typography>
      <div className={s.wrapperTextField}>
        <FormInput control={control} label={'Answer?'} name={'answer'} />
      </div>
      {answerImg && <img alt={'question'} className={s.img} src={URL.createObjectURL(answerImg)} />}
      <FileUploader ref={answerFileRef} setFile={setAnswerImg} trigger={trigger} />
    </div>
  )
}
