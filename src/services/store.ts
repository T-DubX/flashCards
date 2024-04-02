import { configureStore } from '@reduxjs/toolkit'

import { baseApi } from '.'
import { decksReducer, decksSlice } from './decks'

export const store = configureStore({
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware),
  reducer: { [baseApi.reducerPath]: baseApi.reducer, [decksSlice.name]: decksReducer },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
