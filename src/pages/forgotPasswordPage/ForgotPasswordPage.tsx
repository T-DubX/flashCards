import { useNavigate } from 'react-router-dom'

import { ForgotPassword } from '@/components/auth/forgotPassword'
import { useForgotPasswordMutation } from '@/services/auth'

export const ForgotPasswordPage = () => {
  const [forgotPass] = useForgotPasswordMutation()
  const navigate = useNavigate()
  const handleSubmit = (value: { email: string }) => {
    try {
      forgotPass(value).unwrap()
      navigate('/checkEmail', { state: value.email })
    } catch (error) {
      console.log(error)
    }
  }

  return <ForgotPassword onSubmit={handleSubmit} />
}
