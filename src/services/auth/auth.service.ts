import { FormValues } from '@/components/personalInformation/profileInfoEditing/ProfileInfoEditing'

import { ForgotPasswordArgs, LoginArgs, SignUpArgs, User } from '.'
import { baseApi } from '..'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    forgotPassword: builder.mutation<void, ForgotPasswordArgs>({
      invalidatesTags: ['Me'],
      query: args => ({
        body: args,
        method: 'POST',
        url: '/v1/auth/recover-password',
      }),
    }),
    getMe: builder.query<User | undefined, void>({
      providesTags: ['Me'],
      query: () => ({
        url: `/v1/auth/me`,
      }),
    }),
    logout: builder.mutation<void, void>({
      invalidatesTags: ['Me'],
      query: () => ({
        method: 'POST',
        url: '/v1/auth/logout',
      }),
    }),
    signIn: builder.mutation<void, LoginArgs>({
      invalidatesTags: ['Me'],
      query: args => ({
        body: args,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),
    signUp: builder.mutation<User, SignUpArgs>({
      invalidatesTags: ['Me'],
      query: args => ({
        body: args,
        method: 'POST',
        url: '/v1/auth/sign-up',
      }),
    }),
    updateDataProfile: builder.mutation<User, FormData | FormValues>({
      invalidatesTags: ['Me'],
      query: args => ({
        body: args,
        method: 'PATCH',
        url: '/v1/auth/me',
      }),
    }),
  }),
})

export const {
  useForgotPasswordMutation,
  useGetMeQuery,
  useLogoutMutation,
  useSignInMutation,
  useSignUpMutation,
  useUpdateDataProfileMutation,
} = authService
