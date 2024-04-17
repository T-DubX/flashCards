import { Typography } from '@/components/ui/typography'

import s from './answer.module.scss'

type Props = {
  answer: string
  answerImg?: string
}

export const Answer = ({ answer, answerImg }: Props) => {
  return (
    <div className={s.wrapper}>
      <Typography className={s.answer} variant={'body1'}>
        <Typography as={'span'} variant={'subtitle1'}>
          Answer
        </Typography>
        : {answer}
      </Typography>

      {answerImg && <img alt={'answerImg'} className={s.answerImg} src={answerImg} />}
    </div>
  )
}
