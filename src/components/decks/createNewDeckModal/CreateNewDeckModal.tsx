import { useForm } from 'react-hook-form'

import { Button, FormInput } from '@/components/auth/forgotPassword'
import { FormCheckbox } from '@/components/auth/signIn'
import { Modal } from '@/components/ui/modal'
import { useCreateNewDeckMutation } from '@/services/decks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './createNewDecksModal.module.scss'

type Props = {
  onOpenChange: (isOpen: boolean) => void
  open: boolean
}

type FormValues = z.infer<typeof schema>

const schema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(20),
})

export const CreateNewDeckModal = ({ onOpenChange, open }: Props) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      isPrivate: true,
      name: '',
    },
    resolver: zodResolver(schema),
  })

  const [createNewDeck] = useCreateNewDeckMutation()

  const onSubmit = async (data: FormValues) => {
    try {
      await createNewDeck({ ...data, cover: '' }).unwrap()

      reset()
      onOpenChange(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Modal onOpenChange={onOpenChange} open={open} title={'Add New Deck'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          className={s.deckNameField}
          control={control}
          label={'Name Deck'}
          name={'name'}
        />
        <FormCheckbox
          className={s.checkbox}
          control={control}
          defaultChecked
          label={'Private pack'}
          name={'isPrivate'}
        />
        <div className={s.blockButtonModal}>
          <Button onClick={() => onOpenChange(false)} variant={'secondary'}>
            Cancel
          </Button>
          <Button>Add New Pack</Button>
        </div>
      </form>
    </Modal>
  )
}
