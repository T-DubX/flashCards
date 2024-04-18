import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { More } from '@/assets/icon/More'
import { DeleteDeckModal } from '@/components/decks/deleteDeckModal'
import {
  DropDownMenu,
  DropDownMenuStandardItem,
  EditTwoOutline,
  PlayCircle,
  Separator,
  Trash,
} from '@/components/ui/dropDownMenu'

import s from './deckDropDown.module.scss'

type Props = {
  deckId: string
  deckName: string
}

export const DeckDropDown = ({ deckId, deckName }: Props) => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const trigger = <More />
  const handleSelectLearn = () => {
    navigate(`${location.pathname}/learn`)
  }

  const handleSelectDelete = () => {
    setOpen(true)
  }

  return (
    <div className={s.wrapperDropDown}>
      <DeleteDeckModal
        backToPage
        deckName={deckName}
        id={deckId ?? ''}
        onOpenChange={setOpen}
        open={open}
      />
      <DropDownMenu trigger={trigger}>
        <DropDownMenuStandardItem
          icon={<PlayCircle />}
          onSelect={handleSelectLearn}
          value={'Learn'}
        />
        <Separator />
        <DropDownMenuStandardItem icon={<EditTwoOutline />} value={'Edit'} />
        <Separator />
        <DropDownMenuStandardItem icon={<Trash />} onSelect={handleSelectDelete} value={'Delete'} />
      </DropDownMenu>
    </div>
  )
}
