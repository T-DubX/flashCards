import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './personalInformation.module.scss'

import { AvatarUploader } from './avatarUploader/AvatarUploader'
import { ProfileInfo } from './profileInfo/ProfileInfo'
import { FormValues, ProfileInfoEditing } from './profileInfoEditing/ProfileInfoEditing'

type ProfileData = {
  avatar?: string
  email?: string
  name: string
}

export type PersonalInformationProps = {
  data?: ProfileData
  logout: () => void
  updateNickname: (data: FormValues) => void
}

export const PersonalInformation = ({ data, logout, updateNickname }: PersonalInformationProps) => {
  const [edit, setEdit] = useState(false)

  const activateEditMode = () => setEdit(true)
  const deactivateEditMode = () => setEdit(false)

  return (
    <Card className={s.card}>
      <Typography className={s.cardTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <AvatarUploader className={s.avatar} editable={!edit} />
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
