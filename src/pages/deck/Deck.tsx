import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'

import { ArrowBack } from '@/assets/icon/ArrowBack'
import { SELECT_OPTIONS_PAGINATION } from '@/common/const'
import { Container } from '@/components/container'
import { CardsTable } from '@/components/deck/cardsTable'
import { CreateNewCardModal } from '@/components/deck/createNewCardModal'
import { DeckDropDown } from '@/components/deck/deckDropDown'
import { EmptyBlock } from '@/components/deck/emptyBlock'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import { setCurrentPage, setPageSize } from '@/services/deck'
import {
  selectDeckCurrentPage,
  selectDeckOrderBy,
  selectDeckPageSize,
  selectDeckQuestion,
} from '@/services/deck/deck.selector'
import { useGetCardsQuery, useGetDeckQuery } from '@/services/deck/deck.service'
import clsx from 'clsx'

import s from './deck.module.scss'

export const Deck = () => {
  const params = useParams()
  const location = useLocation()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const deckId = params.deckId ?? ''

  useEffect(() => {
    if (location.pathname.includes(deckId)) {
      dispatch(setCurrentPage(1))
      dispatch(setPageSize(5))
    }
  }, [location, deckId, dispatch])

  const currentPage = useSelector(selectDeckCurrentPage)
  const itemsPerPage = useSelector(selectDeckPageSize)
  const orderBy = useSelector(selectDeckOrderBy)
  const question = useSelector(selectDeckQuestion)

  const [createCardModalIsOpen, setCreateCardModalIsOpen] = useState(false)

  const { data: deckData } = useGetDeckQuery({ id: deckId })
  const { data: me } = useGetMeQuery()
  const { data: cardsData } = useGetCardsQuery({
    currentPage,
    id: deckId,
    itemsPerPage,
    orderBy: orderBy ?? undefined,
    question,
  })

  const isOwner = deckData?.userId === me?.id
  const isDeckEmpty = deckData?.cardsCount === 0

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const handleChangeSelectOption = (select: string) => {
    dispatch(setPageSize(Number(select)))
  }

  const handleCreateCard = (isOpen: boolean) => {
    setCreateCardModalIsOpen(isOpen)
    dispatch(setCurrentPage(1))
  }

  const headerDeckClasses = clsx(s.headerDeck, {
    [s.emptyDeck]: (isOwner && isDeckEmpty) || (!isOwner && isDeckEmpty),
  })

  return (
    <Container className={s.wrapper}>
      <CreateNewCardModal onOpenChange={handleCreateCard} open={createCardModalIsOpen} />
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
        {isDeckEmpty && isOwner && (
          <div className={s.emptyBlock}>
            <Typography variant={'body1'}>
              This pack is empty. Click add new card to fill this pack
            </Typography>
            <Button
              as={'button'}
              className={s.emptyBlockBtn}
              onClick={() => setCreateCardModalIsOpen(true)}
            >
              Add New Card
            </Button>
          </div>
        )}
        {!isOwner && isDeckEmpty && <Typography variant={'body1'}>This pack is empty.</Typography>}
      </div>
      {!isDeckEmpty && (
        <div className={s.mainContent}>
          <Input placeholder={'Input search'} type={'search'} />
          <CardsTable cards={cardsData?.items} className={s.cardsTable} isOwner={isOwner} />
          <Pagination
            currentPage={currentPage}
            onChangePage={handleChangePage}
            onValueChange={handleChangeSelectOption}
            options={SELECT_OPTIONS_PAGINATION}
            pageSize={itemsPerPage}
            totalCount={cardsData?.pagination.totalPages ?? 1}
          />
        </div>
      )}
    </Container>
  )
}
