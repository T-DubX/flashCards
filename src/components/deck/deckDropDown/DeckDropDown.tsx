import { useNavigate } from 'react-router-dom'

import { More } from '@/assets/icon/More'
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
}

export const DeckDropDown = ({ deckId }: Props) => {
  const navigate = useNavigate()
  const trigger = <More />
  const handleSelectLearn = () => {
    navigate(`decks/${deckId}/learn`)
  }

  return (
    <div className={s.wrapperDropDown}>
      <DropDownMenu trigger={trigger}>
        <DropDownMenuStandardItem
          icon={<PlayCircle />}
          onSelect={handleSelectLearn}
          value={'Learn'}
        />
        <Separator />
        <DropDownMenuStandardItem icon={<EditTwoOutline />} value={'Edit'} />
        <Separator />
        <DropDownMenuStandardItem icon={<Trash />} value={'Delete'} />
      </DropDownMenu>
    </div>
  )
}
