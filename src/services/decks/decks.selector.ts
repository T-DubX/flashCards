import { RootState } from '@/services/store'

export const selectDecksCurrentTab = (state: RootState) => state.decks.currentTab
export const selectDecksCurrentPage = (state: RootState) => state.decks.currentPage
export const selectDecksPageSize = (state: RootState) => state.decks.pageSize
export const selectDecksOrderBy = (state: RootState) => state.decks.orderBy
