import type { Meta, StoryObj } from '@storybook/react'

import { Select } from '.'

const meta = {
  argTypes: {},
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    options: [
      { disabled: false, value: 'hello1' },
      { disabled: false, value: 'hello2' },
      { disabled: false, value: 'hello3' },
    ],
  },
}
export const PrimaryWithLabel: Story = {
  args: {
    label: 'label',

    options: [
      { disabled: false, value: 'hello1' },
      { disabled: false, value: 'hello2' },
      { disabled: false, value: 'hello3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,

    label: 'label',

    options: [
      { disabled: false, value: 'hello1' },
      { disabled: false, value: 'hello2' },
      { disabled: false, value: 'hello3' },
    ],
  },
}
