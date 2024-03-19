import { DecksTable } from '@/components/decks'
import { useGetDecksQuery } from '@/services/decks'

export const DecksPage = () => {
  const { data: decks } = useGetDecksQuery({})

  return (
    <div>
      <DecksTable decks={decks?.items} />
    </div>
  )
}
