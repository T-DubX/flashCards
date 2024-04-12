export type User = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe: boolean
}

export type SignUpArgs = {
  email: string
  html?: string
  name: string
  password: string
  sendConfirmationEmail?: false
  subject?: string
}

export type ForgotPasswordArgs = Pick<SignUpArgs, 'email' | 'html' | 'subject'>
