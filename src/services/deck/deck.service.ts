import { baseApi } from '@/services'
import {
  CardsItems,
  CreateCardArgs,
  DeleteCardArgs,
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
    deleteCard: builder.mutation<void, DeleteCardArgs>({
      invalidatesTags: ['Deck'],
      query: ({ id }) => ({
        method: 'DELETE',
        url: `v1/cards/${id}`,
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
    getRandomCard: builder.query<CardsItems, { id: string }>({
      providesTags: ['Deck'],
      query: ({ id }) => ({
        url: `/v1/decks/${id}/learn`,
      }),
    }),
    saveGradeCard: builder.mutation<
      CardsItems,
      { args: { cardId: string; grade: number }; id: string }
    >({
      invalidatesTags: ['Deck'],
      query: ({ args, id }) => ({
        body: args,
        method: 'POST',
        url: `/v1/decks/${id}/learn`,
      }),
    }),
  }),
})

export const {
  useCreateCardMutation,
  useDeleteCardMutation,
  useGetCardsQuery,
  useGetDeckQuery,
  useGetRandomCardQuery,
  useSaveGradeCardMutation,
} = deckService
