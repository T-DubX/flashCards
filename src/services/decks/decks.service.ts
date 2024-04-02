import { getValuable } from '@/common/utils/get-valuable'
import { baseApi } from '@/services'
import { CreateDeckArgs, DecksResponse, GetDecksArgs } from '@/services/decks/decks.types'

const decksService = baseApi.injectEndpoints({
  endpoints: builder => ({
    createNewDeck: builder.mutation<DecksResponse, CreateDeckArgs>({
      query: args => ({
        body: args,
        method: 'POST',
        url: `v1/decks`,
      }),
    }),
    getDecks: builder.query<DecksResponse, GetDecksArgs>({
      providesTags: ['Decks'],
      query: args => ({
        params: args ? getValuable(args) : undefined,
        url: `v2/decks`,
      }),
    }),
  }),
})

export const { useCreateNewDeckMutation, useGetDecksQuery } = decksService
