import type { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

const meta = {
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: 'c4',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    id: 'c1',
  },
}

export const WithLabel: Story = {
  args: {
    id: 'c2',
    label: 'hello',
  },
}
export const WithLabelDisabled: Story = {
  args: {
    disabled: true,
    id: 'c3',
    label: 'hello',
  },
}
