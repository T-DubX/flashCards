import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from '.'

const meta = {
  argTypes: {},
  component: CreateNewPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/auth/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
