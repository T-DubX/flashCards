import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from '.'

const meta = {
  argTypes: {},
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    options: [
      { disabled: false, label: 'hello', value: '2' },
      { disabled: false, label: 'hello1', value: '3' },
      { disabled: false, label: 'hello2', value: '4' },
    ],
  },
}

export const DisabledSelectively: Story = {
  args: {
    options: [
      { disabled: true, label: 'hello', value: '2' },
      { disabled: false, label: 'hello1', value: '3' },
      { disabled: false, label: 'hello2', value: '4' },
    ],
  },
}

export const DisabledAll: Story = {
  args: {
    disabledAll: true,
    options: [
      { disabled: false, label: 'hello', value: '2' },
      { disabled: false, label: 'hello1', value: '3' },
      { disabled: false, label: 'hello2', value: '4' },
    ],
  },
}
