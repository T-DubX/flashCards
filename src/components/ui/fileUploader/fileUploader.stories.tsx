import { useRef, useState } from 'react'

import { Avatar } from '@/components/ui/avatar'
import { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { EditTwoOutline } from '../dropDownMenu'
import { FileUploader } from './FileUploader'

const meta = {
  component: FileUploader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/FileUploader',
} satisfies Meta<typeof FileUploader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { trigger: null },
  render: () => {
    const [avatar, setAvatar] = useState<File | null>(null)
    const fileRef = useRef<HTMLInputElement>(null)

    const handleUpload = () => {
      fileRef.current?.click()
    }

    const trigger = (
      <Button
        onClick={handleUpload}
        style={{
          bottom: 0,
          padding: 2,
          position: 'absolute',
          right: 0,
        }}
        variant={'secondary'}
      >
        <EditTwoOutline style={{ marginRight: 0 }} />
      </Button>
    )

    const avatarSrc = avatar ? URL.createObjectURL(avatar) : ''

    return (
      <div style={{ position: 'relative' }}>
        <FileUploader
          className={'helloWorld'}
          ref={fileRef}
          setFile={setAvatar}
          trigger={trigger}
        />
        <Avatar src={avatarSrc} />
      </div>
    )
  },
}
