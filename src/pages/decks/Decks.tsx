import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Trash } from '@/assets/icon/Trash'
import { SELECT_OPTIONS_PAGINATION } from '@/common/const'
import { Button } from '@/components/auth/forgotPassword'
import { Container } from '@/components/container'
import { CreateNewDeckModal } from '@/components/decks/createNewDeckModal'
import { DecksTable } from '@/components/decks/decksTable'
import { DeleteDeckModal } from '@/components/decks/deleteDeckModal'
import { EditDeckModal } from '@/components/decks/editDeckModal'
import { Sort } from '@/components/tableSortHeader'
import { Input } from '@/components/ui/input'
import { Pagination } from '@/components/ui/pagination'
import { Slider } from '@/components/ui/slider'
import { Spinner } from '@/components/ui/spinner'
import { Tabs } from '@/components/ui/tabs'
import { Typography } from '@/components/ui/typography'
import { useGetMeQuery } from '@/services/auth'
import {
  selectDecksCurrentPage,
  selectDecksCurrentTab,
  selectDecksOrderBy,
  selectDecksPageSize,
  setCurrentPage,
  setCurrentTab,
  setOrderBy,
  setPageSize,
  useGetDecksQuery,
  useGetMinMaxDeckQuery,
} from '@/services/decks'
import { AppDispatch } from '@/services/store'

import s from './Decks.module.scss'

import { useDecksSearchParams } from '../../common/hooks/useDeckSearchParams'

export const Decks = () => {
  const currentTab = useSelector(selectDecksCurrentTab)
  const currentPage = useSelector(selectDecksCurrentPage)
  const pageSize = useSelector(selectDecksPageSize)
  const sort = useSelector(selectDecksOrderBy)

  const [createDeckModalOpen, setCreateDeckModalOpen] = useState(false)
  const [deleteDeckId, setDeleteDeckId] = useState<null | string>(null)
  const [editDeckId, setEditDeckId] = useState<null | string>(null)
  const [name, setName] = useState('')

  const dispatch = useDispatch<AppDispatch>()
  const { data: me } = useGetMeQuery()

  const currentUserId = me?.id
  const authorId = currentTab === 'myDecks' ? currentUserId : undefined

  const { changeMinMaxCard, maxCards, minCards, rangeValue } = useDecksSearchParams()

  const { data: minMaxData, isLoading: isLoadingMinMax } = useGetMinMaxDeckQuery()

  const { data, isLoading } = useGetDecksQuery({
    authorId,
    currentPage,
    itemsPerPage: pageSize,
    maxCardsCount: maxCards,
    minCardsCount: minCards,
    name,
    orderBy: sort ? `${sort.key}-${sort.direction}` : undefined,
  })

  const handleCurrentTab = (value: string) => {
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

  const handleClearFilter = () => {
    dispatch(setCurrentPage(1))
    dispatch(setCurrentTab({ authorId: me?.id ?? undefined, tab: 'allDecks' }))
    changeMinMaxCard([0, minMaxData?.max ?? 50])
    setName('')
  }

  const handleSort = (sort: Sort) => {
    dispatch(setOrderBy(sort))
  }

  const handleChangeSearch = (value: string) => {
    setName(value)
    dispatch(setCurrentPage(1))
  }

  if (isLoading && isLoadingMinMax) {
    return <Spinner />
  }

  const deckToDeleteName = data?.items?.find(deck => deck.id === deleteDeckId)?.name
  const deckToEditName = data?.items?.find(deck => deck.id === editDeckId)?.name
  const deckImg = data?.items?.find(deck => deck.id === editDeckId)?.cover

  return (
    <Container className={s.wrapper}>
      <CreateNewDeckModal onOpenChange={handleCreateDeck} open={createDeckModalOpen} />
      <EditDeckModal
        id={editDeckId ?? ''}
        img={deckImg ?? ''}
        name={deckToEditName ?? ''}
        onOpenChange={() => setEditDeckId(null)}
        open={!!editDeckId}
      />
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
            onValueChange={handleCurrentTab}
            tabs={[
              { disabled: false, title: 'My Decks', value: 'myDecks' },
              { disabled: false, title: 'All Decks', value: 'allDecks' },
            ]}
            value={currentTab}
          />
        </div>
        <div className={s.sliderWrapper}>
          <Typography className={s.titleControlBlockItem}>Number of cards</Typography>
          <Slider max={minMaxData?.max ?? 50} onValueChange={changeMinMaxCard} value={rangeValue} />
        </div>
        <Button className={s.clearBtn} onClick={handleClearFilter} variant={'secondary'}>
          <Trash /> <Typography as={'span'}>Clear Filter</Typography>
        </Button>
      </div>

      <div className={s.decksList}>
        {data?.items.length === 0 ? (
          <div className={s.emptyMyDecks}>
            {currentTab === 'myDecks' ? (
              <Typography variant={'body1'}>You don&apos;t have decks</Typography>
            ) : (
              <Typography className={s.titleDecksNotFound} variant={'body1'}>
                Decks not found
              </Typography>
            )}
          </div>
        ) : (
          <DecksTable
            currentUserId={currentUserId ?? ''}
            decks={data?.items}
            onDeleteClick={setDeleteDeckId}
            onEditClick={setEditDeckId}
            onSort={handleSort}
            sort={sort}
          />
        )}
      </div>

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
