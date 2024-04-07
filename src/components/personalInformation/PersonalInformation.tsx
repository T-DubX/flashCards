import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import clsx from 'clsx'

import s from './personalInformation.module.scss'

import { AvatarUploader } from './avatarUploader/AvatarUploader'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { FormValues, ProfileInfoEditing } from './profileInfoEditing/ProfileInfoEditing'

export type ProfileData = {
  avatar?: string
  email?: string
  name: string
}

export type PersonalInformationProps = {
  className?: string
  data?: ProfileData
  logout: () => void
  updateAvatar: (data: File) => Promise<void>
  updateNickname: (data: FormValues) => void
}

export const PersonalInformation = ({
  className,
  data,
  logout,
  updateAvatar,
  updateNickname,
}: PersonalInformationProps) => {
  const [edit, setEdit] = useState(false)

  const activateEditMode = () => setEdit(true)
  const deactivateEditMode = () => setEdit(false)

  return (
    <Card className={clsx(s.card, className)}>
      <Typography className={s.cardTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <AvatarUploader
        avatar={data?.avatar}
        className={s.avatar}
        editable={!edit}
        updateAvatar={updateAvatar}
      />
      {edit ? (
        <ProfileInfoEditing
          deactivateEditMode={deactivateEditMode}
          initialValue={data?.name}
          updateNickname={updateNickname}
        />
      ) : (
        <ProfileInfo
          activeEditMode={activateEditMode}
          email={data?.email}
          logout={logout}
          name={data?.name}
        />
      )}
    </Card>
  )
}
