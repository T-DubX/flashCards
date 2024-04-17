import { useState } from 'react'

import { Card, Typography } from '@/components/auth/forgotPassword'
import { CardsItems } from '@/services/deck'

import s from './learnCard.module.scss'

import { Answer } from './answer'
import { Question } from './question'
import { Grade, Rate } from './rate'

type Props = {
  card: CardsItems | undefined
  deckName: string
  onSaveGrade: (grade: Grade) => void
}

export const LearnCard = ({ card, deckName, onSaveGrade }: Props) => {
  const [show, setShow] = useState(false)

  const handleShowAnswer = () => setShow(true)

  return (
    <Card className={s.card}>
      <Typography className={s.cardTitle} variant={'h1'}>
        Learn “{deckName}”
      </Typography>

      <Question
        handleShowAnswer={handleShowAnswer}
        question={card?.question ?? ''}
        questionImg={card?.questionImg}
        shots={card?.shots ?? 1}
        show={show}
      />
      {show && (
        <div className={s.wrapperHideBlock}>
          <Answer answer={card?.answer ?? ''} answerImg={card?.answerImg} />

          <Rate cardId={card?.id} onSubmit={onSaveGrade} />
        </div>
      )}
    </Card>
  )
}
