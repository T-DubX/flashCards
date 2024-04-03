import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import { Trash } from '@/assets/icon/Trash'
import { SELECT_OPTIONS_PAGINATION } from '@/common/const'
import { Button } from '@/components/auth/forgotPassword'
import { Container } from '@/components/container'
import { DecksTable } from '@/components/decks/decksTable'
import { DeleteDeckModal } from '@/components/decks/deleteDeckModal'
import { Sort } from '@/components/tableSortHeader'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { Tabs } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import {
  selectDecksCurrentPage,
  selectDecksCurrentTab,
  selectDecksMaxCards,
  selectDecksMinCards,
  selectDecksOrderBy,
  selectDecksPageSize,
  setCurrentPage,
  setCurrentTab,
  setMaxCards,
  setMinCards,
  setPageSize,
  useGetDecksQuery,
} from '@/services/decks'
import { AppDispatch } from '@/services/store'

import s from './Decks.module.scss'

import { CreateNewDeckModal } from '../../components/decks/createNewDeckModal'

export const Decks = () => {
  const currentTab = useSelector(selectDecksCurrentTab)
  const currentPage = useSelector(selectDecksCurrentPage)
  const minCardsCount = useSelector(selectDecksMinCards)
  const maxCardsCount = useSelector(selectDecksMaxCards)
  const pageSize = useSelector(selectDecksPageSize)
  const orderBy = useSelector(selectDecksOrderBy)

  const [createDeckModalOpen, setCreateDeckModalOpen] = useState(false)
  const [deleteDeckId, setDeleteDeckId] = useState<null | string>(null)
  const [name, setName] = useState('')
  // const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useDispatch<AppDispatch>()
  const { data: me } = useGetMeQuery()

  const currentUserId = me?.id
  const authorId = currentTab === 'myDecks' ? currentUserId : undefined

  const { data } = useGetDecksQuery({
    authorId,
    currentPage,
    // itemsPrePage: pageSize,
    maxCardsCount,
    minCardsCount,
    name,
    orderBy,
  })

  const hendleCurrentTab = (value: string) => {
    dispatch(setCurrentTab({ authorId: me?.id ?? undefined, tab: value }))
    dispatch(setCurrentPage(1))
  }

  const handleCreateDeck = () => {
    setCreateDeckModalOpen(false)
    dispatch(setCurrentPage(1))
  }

  const handleChangePage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  const handleItemsPrePage = (value: number | string) => {
    const numberValue = Number(value)

    dispatch(setPageSize(numberValue))
  }

  const handleMinMaxChangeValue = (value: number[]) => {
    dispatch(setMinCards(value[0]))
    dispatch(setMaxCards(value[1]))
    dispatch(setCurrentPage(1))
  }

  const handleClearFilter = () => {
    setName('')
    dispatch(setCurrentPage(1))
    dispatch(setMinCards(0))
    dispatch(setMaxCards(10))
    dispatch(setCurrentTab({ authorId: me?.id ?? undefined, tab: 'allDecks' }))
  }

  const handleSort = (sort: Sort) => {
    if (sort) {
      const sortKey = sort.key
      const sortDirection = sort.direction

      console.log(sortDirection, sortKey)
    }

    console.log(sort)
  }

  const handleChangeSearch = (value: string) => {
    setName(value)
    dispatch(setCurrentPage(1))
  }

  const deckToDeleteName = data?.items?.find(deck => deck.id === deleteDeckId)?.name

  return (
    <Container className={s.wrapper}>
      <CreateNewDeckModal onOpenChange={handleCreateDeck} open={createDeckModalOpen} />
      <DeleteDeckModal
        deckName={deckToDeleteName ?? ''}
        id={deleteDeckId ?? ''}
        onOpenChange={() => setDeleteDeckId(null)}
        open={!!deleteDeckId}
      />
      <div className={s.pageHeader}>
        <Typography variant={'h1'}>Decks list</Typography>
        <Button onClick={() => setCreateDeckModalOpen(true)}>Add New Deck</Button>
      </div>
      <div className={s.controlBlock}>
        <div className={s.search}>
          <Input
            onValueChange={handleChangeSearch}
            placeholder={'Input search'}
            type={'search'}
            value={name}
          />
        </div>
        <div className={s.tabsWrapper}>
          <Typography className={s.titleControlBlockItem}>Show decks cards</Typography>
          <Tabs
            onValueChange={hendleCurrentTab}
            tabs={[
              { disabled: false, title: 'My Decks', value: 'myDecks' },
              { disabled: false, title: 'All Decks', value: 'allDecks' },
            ]}
            value={currentTab}
          />
        </div>
        <div className={s.sliderWrapper}>
          <Typography className={s.titleControlBlockItem}>Number of cards</Typography>
          <Slider
            // max={maxCards}
            // min={minCards}
            onValueChange={handleMinMaxChangeValue}
            value={[minCardsCount, maxCardsCount ?? 10]}
          />
        </div>
        <Button className={s.clearBtn} onClick={handleClearFilter} variant={'secondary'}>
          <Trash /> <Typography as={'span'}>Clear Filter</Typography>
        </Button>
      </div>

      <div className={s.decksList}>
        {data?.items.length === 0 && currentTab === 'myDecks' ? (
          <div className={s.emptyMyDecks}>
            <Typography variant={'body1'}>You don&apos;t have decks</Typography>
          </div>
        ) : (
          <DecksTable
            currentUserId={currentUserId ?? ''}
            decks={data?.items}
            onDeleteClick={setDeleteDeckId}
            onEditClick={() => {}}
            onSort={handleSort}
            sort={{ direction: 'desc', key: 'updated' }}
          />
        )}
      </div>
      {data?.items.length === 0 && currentTab !== 'myDecks' && (
        <Typography className={s.titleDecksNotFound} variant={'body1'}>
          Decks not found
        </Typography>
      )}

      <Pagination
        className={s.pagination}
        currentPage={currentPage}
        defaultValue={pageSize.toString()}
        onChangePage={handleChangePage}
        onValueChange={handleItemsPrePage}
        options={SELECT_OPTIONS_PAGINATION}
        pageSize={pageSize}
        totalCount={data?.pagination.totalPages ?? 0}
      />
    </Container>
  )
}
