import { useNavigate } from 'react-router-dom'

import { Button, Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteDeckMutation } from '@/services/decks'

import s from './deleteDeckModal.module.scss'

type Props = {
  backToPage?: boolean
  deckName: string
  id: string
  onOpenChange: (open: boolean) => void
  open: boolean
}

export const DeleteDeckModal = ({ backToPage, deckName, id, onOpenChange, open }: Props) => {
  const [deleteDeck] = useDeleteDeckMutation()
  const navigate = useNavigate()

  const handleCancel = () => {
    onOpenChange(false)
  }

  const handleDelete = async () => {
    await deleteDeck(id)
    if (backToPage) {
      navigate(-1)
    }
    handleCancel()
  }

  return (
    <Modal onOpenChange={onOpenChange} open={open} title={'Delete Deck'}>
      <Typography className={s.discription} variant={'body1'}>
        Do you really want to remove{' '}
        <Typography as={'span'} variant={'subtitle1'}>
          {deckName}
        </Typography>
        ? <br /> All cards will be deleted.
      </Typography>
      <div className={s.wrapperButtons}>
        <Button onClick={handleCancel} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={handleDelete} variant={'primary'}>
          Delete Deck
        </Button>
      </div>
    </Modal>
  )
}
