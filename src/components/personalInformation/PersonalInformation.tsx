import { useState } from 'react'

import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'

import s from './personalInformation.module.scss'

import { AvatarUploader } from './avatarUploader/AvatarUploader'
import { ProfileInfo } from './profileInfo/ProfileInfo'

type ProfileData = {
  avatar?: string
  email?: string
  name: string
}

export type PersonalInformationProps = {
  data: ProfileData
  logout: () => void
}

export const PersonalInformation = ({ data, logout }: PersonalInformationProps) => {
  const [edit, setEdit] = useState(false)

  const activeEditMode = () => setEdit(true)

  return (
    <Card className={s.card}>
      <Typography className={s.cardTitle} variant={'h1'}>
        Personal Information
      </Typography>
      <AvatarUploader className={s.avatar} editable={!edit} />
      {edit ? (
        <div>Edit Mode</div>
      ) : (
        <ProfileInfo
          activeEditMode={activeEditMode}
          email={data?.email}
          logout={logout}
          name={data?.name}
        />
      )}
    </Card>
  )
}
