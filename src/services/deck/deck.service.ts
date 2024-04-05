import { baseApi } from '@/services'
import { GetCardsArgs, GetCardsResponse, GetDeckResponse } from '@/services/deck'

const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getCards: builder.query<GetCardsResponse, GetCardsArgs>({
      providesTags: ['Deck'],
      query: ({ id, ...args }) => ({
        params: args,
        url: `/v1/decks/${id}/cards`,
      }),
    }),
    getDeck: builder.query<GetDeckResponse, { id: string }>({
      providesTags: ['Deck'],
      query: ({ id }) => ({
        url: `/v1/decks/${id}`,
      }),
    }),
  }),
})

export const { useGetCardsQuery, useGetDeckQuery } = deckService
