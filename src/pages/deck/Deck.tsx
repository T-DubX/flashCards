import { Link, useParams } from 'react-router-dom'

import { ArrowBack } from '@/assets/icon/ArrowBack'
import { Container } from '@/components/container'
import { CardsTable } from '@/components/deck/cardsTable'
import { DeckDropDown } from '@/components/deck/deckDropDown'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import { useGetCardsQuery, useGetDeckQuery } from '@/services/deck/deck.service'
import clsx from 'clsx'

import s from './deck.module.scss'

export const Deck = () => {
  const params = useParams()
  const deckId = params.deckId ?? ''

  const { data: deckData } = useGetDeckQuery({ id: deckId })
  const { data: me } = useGetMeQuery()
  const { data: cardsData } = useGetCardsQuery({
    id: deckId,
  })

  const isOwner = deckData?.userId === me?.id
  const isDeckEmpty = deckData?.cardsCount === 0

  console.log(deckData?.cardsCount)

  const headerDeckClasses = clsx(s.headerDeck, {
    [s.emptyDeck]: (isOwner && isDeckEmpty) || (!isOwner && isDeckEmpty),
  })

  return (
    <Container className={s.wrapper}>
      <Button as={Link} className={s.linkBack} to={'/'} variant={'link'}>
        <ArrowBack /> <Typography as={'span'}>Back to Decks List</Typography>
      </Button>
      <div className={headerDeckClasses}>
        <div className={s.headerLeft}>
          <div className={s.deckNameWrapper}>
            <Typography className={s.title} variant={'h1'}>
              {deckData?.name}
            </Typography>
            {isOwner && !isDeckEmpty && <DeckDropDown deckId={deckId} />}
          </div>
          {deckData?.cover && !isDeckEmpty && (
            <div className={s.wrapperAvatarDeck}>
              <img alt={'Avatar Deck'} src={deckData.cover} />
            </div>
          )}
        </div>
        {isOwner && !isDeckEmpty && <Button className={s.headerBtn}>Add New Card</Button>}
        {!isOwner && !isDeckEmpty && (
          <Button as={Link} className={s.headerLink} to={`decks/${params.deckId}/learn`}>
            Learn to Pack
          </Button>
        )}
        {isOwner && isDeckEmpty && (
          <div className={s.emptyBlock}>
            <Typography variant={'body1'}>
              This pack is empty. Click add new card to fill this pack
            </Typography>
            <Button className={s.emptyBlockBtn}>Add New Card</Button>
          </div>
        )}
        {!isOwner && isDeckEmpty && <Typography variant={'body1'}>This pack is empty.</Typography>}
      </div>
      {!isDeckEmpty && (
        <div>
          <Input placeholder={'Input search'} type={'search'} />
          <CardsTable cards={cardsData?.items} isOwner={isOwner} />
        </div>
      )}
    </Container>
  )
}
