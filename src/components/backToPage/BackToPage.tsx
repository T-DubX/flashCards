import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { ArrowBack } from '@/assets/icon/ArrowBack'

import s from './backToPage.module.scss'

import { Button } from '../auth/forgotPassword'

type Props = {
  text: string
}

export const BackToPage = ({ text }: Props) => {
  const navigate = useNavigate()

  const handleBack = () => navigate(-1)

  return (
    <Button className={s.linkBack} onClick={handleBack} variant={'link'}>
      <ArrowBack />
      {text}
    </Button>
  )
}
