export type DecksResponse = {
  items: Deck[]
  pagination: Pagination
}

type DeckAuthor = {
  id: string
  name: string
}

export type Deck = {
  author: DeckAuthor
  cardsCount: number
  cover: string
  created: string
  id: string
  isPrivate: boolean
  name: string
  updated: string
  userId: string
}

export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  totalPages: number
}

export type GetDecksArgs = {
  authorId?: string
  currentPage?: number
  itemsPrePage?: number
  maxCardsCount?: number
  minCardsCount?: number
  name?: string
  orderBy?: string
}

export type CreateDeckArgs = {
  cover?: string
  isPrivate?: boolean
  name: string
}

export type DeleteDeckArgs = {
  id: string
}

export type UpdateDeckArgs = {
  data: FormData
  id: string
}

export type DeleteDeck = Omit<Deck, 'author'>

export type DeleteCardArgs = DeleteDeckArgs
