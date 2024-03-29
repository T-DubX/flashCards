import { Meta, StoryObj } from '@storybook/react'

import { Tabs } from '.'

const meta = {
  argTypes: {},
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Tabs',
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { disabled: false, title: 'hello1', value: 'tab1' },
      { disabled: false, title: 'hello2', value: 'tab2' },
      { disabled: false, title: 'hello3', value: 'tab3' },
    ],
  },
}

export const DefaultWithTitle: Story = {
  args: {
    tabs: [
      { disabled: false, title: 'hello1', value: 'tab1' },
      { disabled: false, title: 'hello2', value: 'tab2' },
      { disabled: false, title: 'hello3', value: 'tab3' },
    ],
    title: 'title',
  },
}

export const Disabled: Story = {
  args: {
    tabs: [
      { disabled: true, title: 'hello1', value: 'tab1' },
      { disabled: true, title: 'hello2', value: 'tab2' },
      { disabled: true, title: 'hello3', value: 'tab3' },
    ],
    title: 'title',
  },
}
