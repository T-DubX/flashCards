import { Deck } from '@/services/decks'

export type GetDeckResponse = Omit<Deck, 'author'>
