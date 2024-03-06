import type { Meta, StoryObj } from '@storybook/react'

import { DropDownMenu } from '.'

const meta = {
  argTypes: {},
  component: DropDownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

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
