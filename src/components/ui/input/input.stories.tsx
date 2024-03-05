import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '.'

const meta = {
  argTypes: {},
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'label',
    placeholder: 'input',
    type: 'text',
  },
}

export const DefaultWithError: Story = {
  args: {
    errorMessage: 'error',
    label: 'label',
    placeholder: 'input',
    type: 'text',
  },
}

export const DefaultWithDisabled: Story = {
  args: {
    disabled: true,
    label: 'label',
    placeholder: 'input',
    type: 'text',
  },
}

export const WithShowPasswordButton: Story = {
  args: {
    label: 'label',
    placeholder: 'input',
    type: 'password',
  },
}

export const WithShowPasswordButtonError: Story = {
  args: {
    errorMessage: 'error',
    label: 'label',
    placeholder: 'input',
    type: 'password',
  },
}
export const WithShowPasswordButtonDisabled: Story = {
  args: {
    disabled: true,
    label: 'label',
    placeholder: 'input',
    type: 'password',
  },
}

export const WithSearch: Story = {
  args: {
    label: 'label',
    placeholder: 'input',
    type: 'search',
  },
}

export const WithSearchError: Story = {
  args: {
    errorMessage: 'error',
    label: 'label',
    placeholder: 'input',
    type: 'search',
  },
}

export const WithSearchDisabled: Story = {
  args: {
    disabled: true,
    label: 'label',
    placeholder: 'input',
    type: 'search',
  },
}
