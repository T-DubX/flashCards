import { useRef } from 'react'

import { EditTwoOutline } from '@/assets/icon/EditTwoOutline'
import { Button } from '@/components/auth/checkEmail'
import { Avatar } from '@/components/ui/avatar'
import { FileUploader } from '@/components/ui/fileUploader'
import clsx from 'clsx'
import { z } from 'zod'

import s from './avatarUploader.module.scss'

type Props = {
  avatar?: string
  className?: string
  editable?: boolean
  updateAvatar: (avatar: ImageSchema) => Promise<void>
}

export type ImageSchema = z.infer<typeof schema>

//https://stackoverflow.com/questions/72674930/zod-validator-validate-image
const schema = z
  .instanceof(File)
  .refine(file => file.size <= 1000000, `Max image size is 1MB. The file will not be uploaded.`)
  .refine(
    file => ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'].includes(file.type),
    '.jpg, .jpeg, .png and .webp files are accepted.'
  )

export const AvatarUploader = ({ avatar, className, editable, updateAvatar }: Props) => {
  const ref = useRef<HTMLInputElement>(null)

  const handleUpdateAvatar = async (file: File | null) => {
    if (file) {
      await updateAvatar(file)
    }
  }

  const handleEditClick = () => {
    ref.current?.click()
  }

  return (
    <div className={clsx(s.wrapper, className)}>
      <Avatar className={s.avatar} src={avatar} />
      {editable && (
        <FileUploader
          ref={ref}
          setFile={handleUpdateAvatar}
          src={avatar}
          trigger={
            <Button className={s.edit} onClick={handleEditClick} variant={'secondary'}>
              <EditTwoOutline />
            </Button>
          }
        />
      )}
    </div>
  )
}
