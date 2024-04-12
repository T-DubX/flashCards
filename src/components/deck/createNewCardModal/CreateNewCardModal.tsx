import { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/auth/forgotPassword'
import { Modal } from '@/components/ui/modal'
import { useCreateCardMutation } from '@/services/deck'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createNewCardModal.module.scss'

import { CreateNewAnswer } from './createNewAnswer'
import { CreateNewQuestion } from './createNewQuestion'

type Props = {
  deckId: string | undefined
  onOpenChange: (isOpen: boolean) => void
  open: boolean
}

export type FormValues = z.infer<typeof schema>

const schema = z.object({
  answer: z.string().min(3),
  // answerImg: z.instanceof(File).optional(),
  question: z.string().min(3),
  // qusestionImg: z.instanceof(File).optional(),
})

export const CreateNewCardModal = ({ deckId, onOpenChange, open }: Props) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      answer: '',
      question: '',
    },
    resolver: zodResolver(schema),
  })

  const [questionImg, setQuestionImg] = useState<File | null>(null)
  const [answerImg, setAnswerImg] = useState<File | null>(null)

  const [createCard] = useCreateCardMutation()

  const onSubmit = async (data: FormValues) => {
    // const formData = new FormData()

    // formData.append('answer', data.answer)
    // formData.append('question', data.question)
    // formData.append('questionImg', questionImg ?? '')
    // formData.append('answerImg', answerImg ?? '')

    try {
      await createCard({
        ...data,
        id: deckId ?? '',
      }).unwrap()
      onOpenChange(false)
      reset()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal onOpenChange={onOpenChange} open={open} title={'Add New Card'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreateNewQuestion
          control={control}
          questionImg={questionImg}
          setQuestionImg={setQuestionImg}
        />
        <CreateNewAnswer answerImg={answerImg} control={control} setAnswerImg={setAnswerImg} />

        <div className={s.buttons}>
          <Button onClick={() => onOpenChange(false)} variant={'secondary'}>
            Cancel
          </Button>
          <Button type={'submit'}>Add New Card</Button>
        </div>
      </form>
    </Modal>
  )
}
