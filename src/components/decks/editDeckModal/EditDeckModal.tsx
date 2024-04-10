import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'

import { ImageOutline } from '@/assets/icon/ImageOutline'
import { Button, FormInput, Typography } from '@/components/auth/forgotPassword'
import { FormCheckbox } from '@/components/auth/signIn'
import { FileUploader } from '@/components/ui/fileUploader'
import { Modal } from '@/components/ui/modal'
import { useUpdateDeckMutation } from '@/services/decks'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './editDeck.module.scss'

import { SelectImg } from './selectImg/SelectImg'

type Props = {
  id: string
  img: string
  name: string
  onOpenChange: (isOpen: boolean) => void
  open: boolean
}

type FormValues = z.infer<typeof schema>

const schema = z.object({
  isPrivate: z.boolean(),
  name: z.string().min(3).max(20),
})

export const EditDeckModal = ({ id, img, name, onOpenChange, open }: Props) => {
  const [currentImg, setCurrentImg] = useState(img)
  const [selectImg, setSelectImg] = useState<File | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const [updateDeck] = useUpdateDeckMutation()

  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: {
      isPrivate: true,
      name: name,
    },
    resolver: zodResolver(schema),
  })

  useEffect(() => {
    selectImg && setCurrentImg(URL.createObjectURL(selectImg))
  }, [selectImg, setSelectImg])

  useEffect(() => {
    setCurrentImg(img)
    reset({ isPrivate: true, name })
  }, [open, reset, name, img])

  const onSubmit = async (data: FormValues) => {
    const formData = new FormData()

    // console.log(data)

    formData.append('cover', selectImg || currentImg)
    formData.append('name', data.name)
    formData.append('isPrivate', data.isPrivate ? 'true' : 'false')

    try {
      await updateDeck({ data: formData, id }).unwrap()
      setCurrentImg('')
      setSelectImg(null)
      onOpenChange(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpload = () => {
    fileRef.current?.click()
  }

  const handleDeleteImg = () => {
    setSelectImg(null)
    setCurrentImg('')
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
        Cover Image
      </Typography>
    </Button>
  )

  return (
    <Modal onOpenChange={onOpenChange} open={open} title={`Editing ${name}`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          className={s.deckNameField}
          control={control}
          label={'Name Deck'}
          name={'name'}
        />
        <FileUploader ref={fileRef} setFile={setSelectImg} trigger={trigger} />
        {selectImg && (
          <SelectImg onClickDeleteImg={handleDeleteImg} src={URL.createObjectURL(selectImg)} />
        )}
        {currentImg && !selectImg && (
          <SelectImg onClickDeleteImg={handleDeleteImg} src={currentImg} />
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
          <Button type={'submit'}>Save Change</Button>
        </div>
      </form>
    </Modal>
  )
}
