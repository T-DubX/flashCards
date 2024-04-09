import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ImageOutline } from '@/assets/icon/ImageOutline'
import { Button, FormInput, Typography } from '@/components/auth/forgotPassword'
import { FormCheckbox } from '@/components/auth/signIn'
import { FileUploader } from '@/components/ui/fileUploader'
import { CloseIcon, Modal } from '@/components/ui/modal'
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

  const [img, setImg] = useState<File | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const [createNewDeck] = useCreateNewDeckMutation()

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData()

    formData.append('cover', img ?? '')
    formData.append('name', data.name)
    formData.append('isPrivate', data.isPrivate ? 'true' : 'false')
    try {
      await createNewDeck(formData).unwrap()

      reset()
      onOpenChange(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDeleteSelectImg = () => setImg(null)

  const handleUpload = () => {
    fileRef.current?.click()
  }

  const trigger = (
    <Button
      as={'span'}
      className={s.trigger}
      fullWidth
      onClick={handleUpload}
      variant={'secondary'}
    >
      <ImageOutline />
      <Typography className={s.triggerText} variant={'subtitle2'}>
        Upload Image
      </Typography>
    </Button>
  )

  return (
    <Modal onOpenChange={onOpenChange} open={open} title={'Add New Deck'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          className={s.deckNameField}
          control={control}
          label={'Name Deck'}
          name={'name'}
        />
        <FileUploader ref={fileRef} setFile={setImg} trigger={trigger} />
        {img && (
          <div className={s.wrapperSelectImg}>
            <img alt={''} className={s.selectImg} src={URL.createObjectURL(img)} />
            <Button className={s.deleteImgBtn} onClick={handleDeleteSelectImg} variant={'icon'}>
              <CloseIcon />
            </Button>
          </div>
        )}
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
          <Button type={'submit'}>Add New Pack</Button>
        </div>
      </form>
    </Modal>
  )
}
