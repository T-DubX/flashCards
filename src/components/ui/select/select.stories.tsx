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
      { disabled: false, label: 'hello1', value: 'hello1' },
      { disabled: false, label: 'hello1', value: 'hello2' },
      { disabled: false, label: 'hello1', value: 'hello3' },
    ],
  },
}
export const PrimaryWithLabel: Story = {
  args: {
    label: 'label',

    options: [
      { disabled: false, label: 'hello1', value: 'hello1' },
      { disabled: false, label: 'hello1', value: 'hello2' },
      { disabled: false, label: 'hello1', value: 'hello3' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,

    label: 'label',

    options: [
      { disabled: false, label: 'hello1', value: 'hello1' },
      { disabled: false, label: 'hello1', value: 'hello2' },
      { disabled: false, label: 'hello1', value: 'hello3' },
    ],
  },
}

export const ForPagination: Story = {
  args: {
    options: [
      { disabled: false, label: '1', value: 'hello1' },
      { disabled: false, label: '20', value: 'hello2' },
      { disabled: false, label: '300', value: 'hello3' },
    ],
    pagination: true,
  },
}
