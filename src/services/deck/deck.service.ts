import { baseApi } from '@/services'
import {
  CardsItems,
  CreateCardArgs,
  GetCardsArgs,
  GetCardsResponse,
  GetDeckResponse,
} from '@/services/deck'

const deckService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createCard: builder.mutation<CardsItems, CreateCardArgs>({
      invalidatesTags: ['Deck'],
      query: ({ id, ...args }) => ({
        body: args,
        method: 'POST',
        url: `/v1/decks/${id}/cards`,
      }),
    }),
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

export const { useCreateCardMutation, useGetCardsQuery, useGetDeckQuery } = deckService
