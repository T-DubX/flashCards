import { baseApi } from '@/services'
import { DecksResponse, GetDecksArgs } from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDecks: builder.query<DecksResponse, GetDecksArgs>({
      providesTags: ['Decks'],
      query: params => ({
        params: params ?? undefined,
        url: `v2/decks`,
      }),
    }),
  }),
})

export const { useGetDecksQuery } = decksService
