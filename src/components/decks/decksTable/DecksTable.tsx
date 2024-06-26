import { Link } from 'react-router-dom'

import { EditTwoOutline } from '@/assets/icon/EditTwoOutline'
import { PlayCircle } from '@/assets/icon/PlayCircle'
import { Trash } from '@/assets/icon/Trash'
import { dateTimeFormat } from '@/common/utils'
import { Column, Sort, TableSortHeader } from '@/components/tableSortHeader'
import { Button } from '@/components/ui/button'
import { Table } from '@/components/ui/table/Table'
import { Typography } from '@/components/ui/typography'
import { Deck } from '@/services/decks'

import s from './decksTable.module.scss'

type Props = {
  currentUserId: string
  decks: Deck[] | undefined
  onDeleteClick: (id: string) => void
  onEditClick: (id: string) => void
  onSort: (key: Sort) => void
  sort: Sort
}

const columns: Column[] = [
  {
    cols: '3',
    key: 'name',
    title: 'Name',
  },
  {
    cols: '1',
    key: 'cardsCount',
    title: 'Cards',
  },
  {
    cols: '2',
    key: 'updated',
    title: 'Last Updated',
  },
  {
    cols: '3',
    key: 'created',
    title: 'Created By',
  },
  {
    cols: '1',
    key: 'actions',
    sortable: false,
    title: '',
  },
]

export const DecksTable = ({
  currentUserId,
  decks,
  onDeleteClick,
  onEditClick,
  onSort,
  sort,
}: Props) => {
  return (
    <Table.Root>
      <TableSortHeader columns={columns} onSort={onSort} sort={sort}></TableSortHeader>
      <Table.Body>
        {decks?.map(deck => (
          <Table.Row key={deck.id}>
            <Table.Cell col={'3'}>
              {deck.cover && <img alt={''} className={s.img} src={deck.cover} />}
              <Typography
                as={Link}
                className={s.deckName}
                title={deck.name}
                to={`/decks/${deck.id}`}
                variant={'body2'}
              >
                {deck.name}
              </Typography>
            </Table.Cell>
            <Table.Cell col={'1'}>
              <Typography variant={'body2'}>{deck.cardsCount}</Typography>
            </Table.Cell>
            <Table.Cell col={'2'}>
              <Typography variant={'body2'}>{dateTimeFormat(deck.updated)}</Typography>
            </Table.Cell>
            <Table.Cell col={'3'}>
              <Typography variant={'body2'}>{deck.author.name}</Typography>
            </Table.Cell>
            <Table.Cell col={'1'}>
              <div className={s.wrapperIcons}>
                <Button as={Link} title={'Learn'} to={`/decks/${deck.id}/learn`} variant={'icon'}>
                  <PlayCircle />
                </Button>
                {deck.author.id === currentUserId && (
                  <>
                    <Button onClick={() => onEditClick(deck.id)} title={'Edit'} variant={'icon'}>
                      <EditTwoOutline />
                    </Button>
                    <Button
                      onClick={() => onDeleteClick(deck.id)}
                      title={'Delete'}
                      variant={'icon'}
                    >
                      <Trash />
                    </Button>
                  </>
                )}
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
