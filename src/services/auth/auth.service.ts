import { LoginArgs, User } from '.'
import { baseApi } from '..'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<User | undefined, void>({
      providesTags: ['Me'],
      query: () => ({
        url: `/v1/auth/me`,
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
  }),
})

export const { useGetMeQuery, useSignInMutation } = authService
