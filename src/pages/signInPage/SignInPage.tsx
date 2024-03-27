import { FormValues } from '@/components/auth/signIn'
import { SignIn } from '@/components/auth/signIn/SignIn'
import { useSignInMutation } from '@/services/auth'

export const SignInPage = () => {
  const [login] = useSignInMutation()

  const handleSubmit = async (data: FormValues) => {
    try {
      await login(data).unwrap()
    } catch (e: any) {
      console.log(e.data.message)
    }
  }

  return <SignIn onSubmit={handleSubmit} />
}
