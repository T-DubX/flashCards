import { Link } from 'react-router-dom'

import { ArrowBack } from '@/assets/icon/ArrowBack'
import { profileData } from '@/common/utils'
import { Button, Typography } from '@/components/auth/forgotPassword'
import { PersonalInformation } from '@/components/personalInformation'
import { useGetMeQuery, useLogoutMutation, useUpdateDataProfileMutation } from '@/services/auth'

import s from './profileInformationPage.module.scss'

export const ProfileInformationPage = () => {
  const { data } = useGetMeQuery()
  const [logout] = useLogoutMutation()
  const [updateData] = useUpdateDataProfileMutation()

  const personData = profileData(data)

  return (
    <div className={s.wrapper}>
      <Button as={Link} className={s.linkBack} to={'/'} variant={'link'}>
        <ArrowBack /> <Typography as={'span'}>Back to main</Typography>
      </Button>
      <PersonalInformation data={personData} logout={logout} updateNickname={updateData} />
    </div>
  )
}
