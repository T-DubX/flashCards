import { baseApi } from '@/services'
import { GetDeckResponse } from '@/services/deck'

const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getDeck: builder.query<GetDeckResponse, { id: string }>({
      providesTags: ['Deck'],
      query: ({ id }) => ({
        url: `/v1/decks/${id}`,
      }),
    }),
  }),
})

export const { useGetDeckQuery } = deckService
