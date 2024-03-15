import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '.'

const meta = {
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const WithImg: Story = {
  args: {
    src: 'https://images.pexels.com/photos/3794359/pexels-photo-3794359.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
}
