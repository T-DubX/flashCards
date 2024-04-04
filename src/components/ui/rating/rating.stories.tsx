import type { Meta, StoryObj } from '@storybook/react'

import { Rating } from '@/components/ui/rating/Rating'

const meta = {
  argTypes: {},
  component: Rating,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Rating',
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rating: 0,
  },
}

export const RatingFull: Story = {
  args: {
    rating: 5,
  },
}
