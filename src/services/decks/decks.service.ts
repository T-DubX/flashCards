import { baseApi } from '@/services'
import {
  Deck,
  DecksResponse,
  GetDecksArgs,
  MinMaxDeckResponse,
  UpdateDeckArgs,
} from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createNewDeck: builder.mutation<DecksResponse, FormData>({
      invalidatesTags: ['Decks'],
      query: args => ({
        body: args,
        method: 'POST',
        url: `v1/decks`,
      }),
    }),
    deleteDeck: builder.mutation<void, string>({
      invalidatesTags: ['Decks'],
      query: id => ({
        method: 'DELETE',
        url: `v1/decks/${id}`,
      }),
    }),
    getDecks: builder.query<DecksResponse, GetDecksArgs>({
      providesTags: ['Decks'],
      query: args => ({
        params: args ? args : undefined,
        url: `v2/decks`,
      }),
    }),
    getMinMaxDeck: builder.query<MinMaxDeckResponse, void>({
      providesTags: ['Decks'],
      query: () => ({
        url: '/v2/decks/min-max-cards',
      }),
    }),
    updateDeck: builder.mutation<Deck, UpdateDeckArgs>({
      invalidatesTags: ['Decks'],
      query: ({ data, id }) => ({
        body: data,
        method: 'PATCH',
        url: `/v1/decks/${id}`,
      }),
    }),
  }),
})

export const {
  useCreateNewDeckMutation,
  useDeleteDeckMutation,
  useGetDecksQuery,
  useGetMinMaxDeckQuery,
  useUpdateDeckMutation,
} = decksService
