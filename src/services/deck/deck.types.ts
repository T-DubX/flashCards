import { Deck, Pagination } from '@/services/decks'

export type GetDeckResponse = Omit<Deck, 'author'>

export type GetCardsArgs = {
  answer?: string
  currentPage?: number
  id: string
  itemsPerPage?: number
  orderBy?: string
  question?: string
}
export type GetCardsResponse = {
  items: GetCardsResponseItems[]
  pagination: Pagination
}

export type GetCardsResponseItems = {
  answer: string
  answerImg: string
  answerVideo: string
  created: string
  deckId: string
  grade: number
  id: string
  question: string
  questionImg: string
  questionVideo: string
  shots: number
  updated: string
  userId: string
}
