import { useLocation } from 'react-router-dom'

import { CheckEmail } from '@/components/auth/checkEmail'

export const CheckEmailPage = () => {
  const {
    state: { email },
  } = useLocation()

  return <CheckEmail email={email} />
}
