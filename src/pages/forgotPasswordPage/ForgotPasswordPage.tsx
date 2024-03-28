import { useNavigate } from 'react-router-dom'

import { ForgotPassword } from '@/components/auth/forgotPassword'
import { useForgotPasswordMutation } from '@/services/auth'

export const ForgotPasswordPage = () => {
  const [forgotPass] = useForgotPasswordMutation()
  const navigate = useNavigate()
  const handleSubmit = async (value: { email: string }) => {
    try {
      await forgotPass(value).unwrap()

      navigate('/checkEmail', { state: { email: value.email } })
    } catch (error) {
      console.log(error)
    }
  }

  return <ForgotPassword onSubmit={handleSubmit} />
}
