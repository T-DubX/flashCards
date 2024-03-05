import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Slider } from '.'

const meta = {
  argTypes: {},
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Slider',
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    max: 50,
    min: 1,

    value: [10, 40],
  },
  render: () => {
    const [value, setValue] = useState([10, 40])

    const onChange = (values: number[]) => {
      setValue(values)
    }

    return <Slider max={50} min={1} onValueChange={onChange} value={value} />
  },
}
