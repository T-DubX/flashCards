import { SignIn } from '@/components/auth/signIn/SignIn'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  component: SignIn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/SignIn',
} satisfies Meta<typeof SignIn>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
