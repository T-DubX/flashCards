import { RootState } from '@/services/store'

export const selectDeckCurrentPage = (state: RootState) => state.deck.currentPage
export const selectDeckOrderBy = (state: RootState) => state.deck.orderBy
export const selectDeckPageSize = (state: RootState) => state.deck.pageSize
export const selectDeckQuestion = (state: RootState) => state.deck.question
