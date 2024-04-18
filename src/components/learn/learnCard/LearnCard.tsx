import { Card, Typography } from '@/components/auth/forgotPassword'
import { CardsItems } from '@/services/deck'

import s from './learnCard.module.scss'

import { Answer } from './answer'
import { Question } from './question'
import { Grade, Rate } from './rate'

type Props = {
  card: CardsItems | undefined
  deckName: string
  onHideAnswer: () => void
  onSaveGrade: (grade: Grade) => void
  onShowAnswer: () => void
  show: boolean
}

export const LearnCard = ({
  card,
  deckName,
  onHideAnswer,
  onSaveGrade,
  onShowAnswer,
  show,
}: Props) => {
  return (
    <Card className={s.card}>
      <Typography className={s.cardTitle} variant={'h1'}>
        Learn “{deckName}”
      </Typography>

      <Question
        handleShowAnswer={onShowAnswer}
        question={card?.question ?? ''}
        questionImg={card?.questionImg}
        shots={card?.shots ?? 1}
        show={show}
      />
      {show && (
        <div className={s.wrapperHideBlock}>
          <Answer answer={card?.answer ?? ''} answerImg={card?.answerImg} />

          <Rate handleHideAnswer={onHideAnswer} onSubmit={onSaveGrade} />
        </div>
      )}
    </Card>
  )
}
