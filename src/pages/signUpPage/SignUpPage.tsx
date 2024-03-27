import { useNavigate } from 'react-router-dom'

import { SignUp } from '@/components/auth/signUp'
import { FormType } from '@/components/auth/signUp/SignUp'
import { useSignUpMutation } from '@/services/auth'

export const SignUpPage = () => {
  const [signUp] = useSignUpMutation()
  const navigate = useNavigate()
  const handleSubmit = async (data: FormType) => {
    const { email, name, password } = data

    console.log(data)
    try {
      await signUp({ email, name, password }).unwrap()
      navigate('/')
    } catch (e: any) {
      console.log(e.data.message)
    }
  }

  return <SignUp onSubmit={handleSubmit} />
}
