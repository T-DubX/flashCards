import { Link, useParams } from 'react-router-dom'

import { ArrowBack } from '@/assets/icon/ArrowBack'
import { Container } from '@/components/container'
import { DeckDropDown } from '@/components/deck/deckDropDown'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import { useGetCardsQuery, useGetDeckQuery } from '@/services/deck/deck.service'

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

  console.log(cardsData?.items)

  return (
    <Container className={s.wrapper}>
      <Button as={Link} className={s.linkBack} to={'/'} variant={'link'}>
        <ArrowBack /> <Typography as={'span'}>Back to Decks List</Typography>
      </Button>
      <div className={s.headerDeck}>
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
        {!isOwner && (
          <Button as={Link} className={s.headerLink} to={`decks/${params.deckId}/learn`}>
            Learn to Pack
          </Button>
        )}
      </div>
      {!isDeckEmpty && (
        <div>
          <Input placeholder={'Input search'} type={'search'} />
        </div>
      )}
    </Container>
  )
}
