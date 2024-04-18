import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackToPage } from '@/components/backToPage/BackToPage'
import { Container } from '@/components/container'
import { LearnCard } from '@/components/learn/learnCard'
import { Grade } from '@/components/learn/learnCard/rate'
import {
  CardsItems,
  useGetDeckQuery,
  useGetRandomCardQuery,
  useSaveGradeCardMutation,
} from '@/services/deck'

import s from './learnCardPage.module.scss'

export const LearnCardPage = () => {
  const { deckId } = useParams()

  const { data: card } = useGetRandomCardQuery({ id: deckId ?? '' })
  const { data: deck } = useGetDeckQuery({ id: deckId ?? '' })

  const [saveGrade] = useSaveGradeCardMutation()

  const [cards, setCards] = useState<CardsItems>()

  const [show, setShow] = useState(false)

  const handleShowAnswer = () => setShow(true)
  const handleHideAnswer = () => setShow(false)

  useEffect(() => {
    setCards(card)
    handleHideAnswer()
  }, [card])

  const handleSaveGrade = async (data: Grade) => {
    const gradeNumber = Number(data.grade)

    try {
      await saveGrade({
        args: { cardId: card?.id ?? '', grade: gradeNumber },
        id: deckId ?? '',
      }).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container className={s.container}>
      <BackToPage text={'Back to Cards List'} />
      <LearnCard
        card={cards}
        deckName={deck?.name ?? 'Learn Deck'}
        onHideAnswer={handleHideAnswer}
        onSaveGrade={handleSaveGrade}
        onShowAnswer={handleShowAnswer}
        show={show}
      />
    </Container>
  )
}
