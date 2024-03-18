import { Meta, StoryObj } from '@storybook/react'

import { SignUp } from '.'

const meta = {
  argTypes: {},
  component: SignUp,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/auth/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
