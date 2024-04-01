import { RootState } from '@/services/store'

export const selectDecksCurrentTab = (state: RootState) => state.decks.currentTab
export const selectDecksCurrentPage = (state: RootState) => state.decks.currentPage
export const selectDecksMinCards = (state: RootState) => state.decks.minCards
export const selectDecksMaxCards = (state: RootState) => state.decks.maxCards
export const selectDecksPageSize = (state: RootState) => state.decks.pageSize
