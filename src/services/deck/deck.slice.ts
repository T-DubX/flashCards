import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const deckSlice = createSlice({
  initialState: {
    currentPage: 1,
    orderBy: null,
    pageSize: 5,
    question: '',
  },
  name: 'deck',
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.question = action.payload
    },
  },
})

export const deckReducer = deckSlice.reducer
export const { setCurrentPage, setPageSize, setSearch } = deckSlice.actions
