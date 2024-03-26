import { User } from '@/services/auth'

export const profileData = (data: User | undefined) => ({
  avatar: data?.avatar ?? '',
  email: data?.email ?? '',
  name: data?.name ?? '',
})
