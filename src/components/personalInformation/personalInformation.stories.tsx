import { Meta, StoryObj } from '@storybook/react'

import { PersonalInformation, ProfileData } from '.'

const meta = {
  argTypes: {},
  component: PersonalInformation,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/PersonalInformation',
} satisfies Meta<typeof PersonalInformation>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    data: {
      avatar: '',
      email: 'person@mail.ru',
      name: 'Joen Dath',
    },
    updateAvatar: () => new Promise(res => res()),
    updateNickname: (data: ProfileData) => console.log(data.name),
  },
}
