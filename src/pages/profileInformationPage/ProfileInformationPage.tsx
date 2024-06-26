import { Link } from 'react-router-dom'

import { ArrowBack } from '@/assets/icon/ArrowBack'
import { profileData } from '@/common/utils'
import { Button, Typography } from '@/components/auth/forgotPassword'
import { PersonalInformation } from '@/components/personalInformation'
import { ImageSchema } from '@/components/personalInformation/avatarUploader/AvatarUploader'
import { useGetMeQuery, useLogoutMutation, useUpdateDataProfileMutation } from '@/services/auth'

import s from './profileInformationPage.module.scss'

export const ProfileInformationPage = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const [updateData] = useUpdateDataProfileMutation()

  const personData = profileData(data)

  const handleUpdateAvatar = async (avatar: ImageSchema) => {
    const formData = new FormData()

    formData.append('avatar', avatar)

    await updateData(formData).unwrap()
  }

  return (
    <div className={s.wrapper}>
      <Button as={Link} className={s.linkBack} to={'/'} variant={'link'}>
        <ArrowBack /> <Typography as={'span'}>Back to main</Typography>
      </Button>
      <PersonalInformation
        className={s.personDataBlock}
        data={personData}
        logout={logout}
        updateAvatar={handleUpdateAvatar}
        updateNickname={updateData}
      />
    </div>
  )
}
