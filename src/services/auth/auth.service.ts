import { User } from '.'
import { baseApi } from '..'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<User | undefined, void>({
      providesTags: ['Me'],
      query: () => ({
        url: `/v1/auth/me`,
      }),
    }),
  }),
})

export const { useGetMeQuery } = authService
