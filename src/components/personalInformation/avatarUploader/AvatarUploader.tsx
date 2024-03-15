import { EditTwoOutline } from '@/assets/icon/EditTwoOutline'
import { Button } from '@/components/auth/checkEmail'
import { Avatar } from '@/components/ui/avatar'
import clsx from 'clsx'

import s from './avatarUploader.module.scss'

type Props = {
  className: string
  editable: boolean
}

export const AvatarUploader = ({ className, editable }: Props) => {
  return (
    <div className={clsx(s.wrapper, className)}>
      <Avatar className={s.avatar} />
      {editable && (
        <Button className={s.edit} variant={'secondary'}>
          <EditTwoOutline />
        </Button>
      )}
    </div>
  )
}
