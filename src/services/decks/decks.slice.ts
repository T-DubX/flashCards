import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const decksSlice = createSlice({
  initialState: {
    authorId: undefined as string | undefined,
    currentPage: 1,
    currentTab: 'allDecks',
    maxCards: undefined as number | undefined,
    minCards: 0,
    pageSize: 10,
  },
  name: 'decks',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setCurrentTab: (
      state,
      action: PayloadAction<{ authorId: string | undefined; tab: string }>
    ) => {
      state.currentTab = action.payload.tab
      state.authorId = action.payload.authorId
    },
    setMaxCards: (state, action: PayloadAction<number>) => {
      state.maxCards = action.payload
    },
    setMinCards: (state, action: PayloadAction<number>) => {
      state.minCards = action.payload
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload
    },
  },
})

export const decksReducer = decksSlice.reducer
export const { setCurrentPage, setCurrentTab, setMaxCards, setMinCards, setPageSize } =
  decksSlice.actions
export const decksActions = decksSlice.actions
