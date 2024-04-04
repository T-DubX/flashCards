import { Link, useParams } from 'react-router-dom'

import { ArrowBack } from '@/assets/icon/ArrowBack'
import { Container } from '@/components/container'
import { DeckDropDown } from '@/components/deck/deckDropDown'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import { useGetDeckQuery } from '@/services/deck/deck.service'

import s from './deck.module.scss'

export const Deck = () => {
  const params = useParams()
  const deckId = params.deckId ?? ''

  const { data: deckData } = useGetDeckQuery({ id: deckId })
  const { data: me } = useGetMeQuery()

  const isOwner = deckData?.userId === me?.id
  // const isDeckEmpty = deckData?.

  console.log(deckData)

  return (
    <Container className={s.wrapper}>
      <Button as={Link} className={s.linkBack} to={'/'} variant={'link'}>
        <ArrowBack /> <Typography as={'span'}>Back to Decks List</Typography>
      </Button>
      <div className={s.headerDeck}>
        <div className={s.deckNameWrapper}>
          <Typography variant={'h1'}>{deckData?.name}</Typography>
          {isOwner && <DeckDropDown deckId={deckId} />}
        </div>

        {isOwner && <Button>Add New Card</Button>}
        {!isOwner && (
          <Button as={Link} to={`decks/${params.deckId}/learn`}>
            Learn to Pack
          </Button>
        )}
      </div>
      {deckData?.cover && (
        <div className={s.wrapperAvatarDeck}>
          <img alt={'Avatar Deck'} src={deckData.cover} />
        </div>
      )}
      <Input placeholder={'Input search'} type={'search'} />
    </Container>
  )
}
