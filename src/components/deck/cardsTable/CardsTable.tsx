import { ComponentPropsWithoutRef } from 'react'

import { EditTwoOutline } from '@/assets/icon/EditTwoOutline'
import { Trash } from '@/assets/icon/Trash'
import { dateTimeFormat } from '@/common/utils'
import { Column, TableSortHeader } from '@/components/tableSortHeader'
import { Button } from '@/components/ui/button'
import { Rating } from '@/components/ui/rating'
import { Table } from '@/components/ui/table/Table'
import { Typography } from '@/components/ui/typography'
import { CardsItems } from '@/services/deck'

import s from './cardsTable.module.scss'

type Props = {
  cards: CardsItems[] | undefined
  isOwner: boolean
  setCardToDeleteId: (id: string) => void
  setDeleteCardModalIsOpen: (isOpen: boolean) => void
} & ComponentPropsWithoutRef<'table'>

const columns: Column[] = [
  { cols: '3', key: 'question', title: 'Question' },
  { cols: '3', key: 'answer', title: 'Answer' },
  { cols: '2', key: 'update', title: 'Last Update' },
  { cols: '2', key: 'grade', title: 'Grade' },
]

export const CardsTable = ({
  cards,
  isOwner,
  setCardToDeleteId,
  setDeleteCardModalIsOpen,
  ...rest
}: Props) => {
  const handleDelete = (id: string) => {
    setCardToDeleteId(id)
    setDeleteCardModalIsOpen(true)
  }

  return (
    <Table.Root {...rest}>
      <TableSortHeader columns={columns} />
      <Table.Body>
        {cards?.map(card => (
          <Table.Row key={card.id}>
            <Table.Cell col={'3'}>
              <div className={s.questionCell}>
                {card.questionImg && (
                  <img alt={'Question img'} className={s.img} src={card.questionImg} />
                )}
                <Typography title={card.question} variant={'body2'}>
                  {card.question}
                </Typography>
              </div>
            </Table.Cell>
            <Table.Cell col={'3'}>
              <div className={s.answerCell}>
                {card.answerImg && (
                  <img alt={'Answer img'} className={s.img} src={card.answerImg} />
                )}
                <Typography title={card.answer} variant={'body2'}>
                  {card.answer}
                </Typography>
              </div>
            </Table.Cell>
            <Table.Cell col={'2'}>
              <Typography variant={'body2'}>{dateTimeFormat(card.updated)}</Typography>
            </Table.Cell>
            <Table.Cell col={'2'}>
              <Rating rating={card.grade} />
              {isOwner && (
                <div className={s.buttons}>
                  <Button title={'Edit'} variant={'icon'}>
                    <EditTwoOutline />
                  </Button>
                  <Button onClick={() => handleDelete(card.id)} title={'Delete'} variant={'icon'}>
                    <Trash />
                  </Button>
                </div>
              )}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
