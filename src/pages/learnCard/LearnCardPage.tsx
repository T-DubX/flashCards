import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { BackToPage } from '@/components/backToPage/BackToPage'
import { Container } from '@/components/container'
import { LearnCard } from '@/components/learn/learnCard'
import { Grade } from '@/components/learn/learnCard/rate'
import { Spinner } from '@/components/ui/spinner'
import { Typography } from '@/components/ui/typography'
import {
  CardsItems,
  useGetDeckQuery,
  useGetRandomCardQuery,
  useSaveGradeCardMutation,
} from '@/services/deck'

import s from './learnCardPage.module.scss'

export const LearnCardPage = () => {
  const { deckId } = useParams()

  const { data: card, isLoading: isLoadingCard } = useGetRandomCardQuery({ id: deckId ?? '' })
  const { data: deck, isLoading: isLoadingDeck } = useGetDeckQuery({ id: deckId ?? '' })

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

  if (isLoadingCard && isLoadingDeck) {
    return <Spinner />
  }

  return (
    <Container className={s.container}>
      <BackToPage text={'Back to Cards List'} />
      {deck?.cardsCount === 0 ? (
        <Typography className={s.isEmpty}>
          This deck is empty. There&apos;s nothing to learn here.
        </Typography>
      ) : (
        <LearnCard
          card={cards}
          deckName={deck?.name ?? 'Learn Deck'}
          onHideAnswer={handleHideAnswer}
          onSaveGrade={handleSaveGrade}
          onShowAnswer={handleShowAnswer}
          show={show}
        />
      )}
    </Container>
  )
}
