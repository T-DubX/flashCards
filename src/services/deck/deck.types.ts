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
  items: CardsItems[]
  pagination: Pagination
}

export type CardsItems = {
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

export type CreateCardArgs = {
  answer: string
  id: string
  question: string
}
