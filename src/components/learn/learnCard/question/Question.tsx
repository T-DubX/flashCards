import { Button } from '@/components/auth/forgotPassword'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './question.module.scss'

type Props = {
  handleShowAnswer: () => void
  question: string
  questionImg?: string
  shots: number
  show: boolean
}

export const Question = ({ handleShowAnswer, question, questionImg, shots, show }: Props) => {
  return (
    <div className={clsx(s.wrapper, !show && s.withoutMargin)}>
      <Typography className={s.question} variant={'body1'}>
        <Typography as={'span'} className={s.questionTitle} variant={'subtitle1'}>
          Question
        </Typography>
        : {question}
      </Typography>
      {questionImg && <img alt={'questionImg'} className={s.questionImg} src={questionImg} />}
      <Typography className={s.shots} variant={'body2'}>
        Количество попыток ответов на вопрос: {shots}
      </Typography>
      {!show && (
        <Button fullWidth onClick={handleShowAnswer}>
          Show Answer
        </Button>
      )}
    </div>
  )
}
