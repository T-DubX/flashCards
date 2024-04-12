import { Button, Modal } from '@/components/ui/modal'
import { Typography } from '@/components/ui/typography'
import { useDeleteCardMutation } from '@/services/decks'

import s from './deleteCardModal.module.scss'

type Props = {
  cardId: string
  cardName: string
  onOpenChange: (isOpen: boolean) => void
  open: boolean
}

export const DeleteCardModal = ({ cardId, cardName, onOpenChange, open }: Props) => {
  const [deleteCard] = useDeleteCardMutation()

  const handleDelete = async () => {
    try {
      await deleteCard(cardId).unwrap()
      onOpenChange(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal onOpenChange={onOpenChange} open={open} title={'Delete Card'}>
      <Typography className={s.description} variant={'body1'}>
        Do you really want to remove{' '}
        <Typography as={'span'} variant={'subtitle1'}>
          {cardName}
        </Typography>
        ? <br />
      </Typography>
      <div className={s.buttons}>
        <Button onClick={() => onOpenChange(false)} variant={'secondary'}>
          Cancel
        </Button>
        <Button onClick={handleDelete}>Delete Card</Button>
      </div>
    </Modal>
  )
}
