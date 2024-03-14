import { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '.'

const meta = {
  argTypes: {},
  component: ForgotPassword,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
