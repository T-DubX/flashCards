import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Typography } from '@/components/ui/typography'

import { Pagination } from './'

const meta = {
  component: Pagination,
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { label: ' 1', value: '1' },
  { label: ' 2', value: '2' },
  { label: ' 3', value: '3' },
  { label: ' 4', value: '4' },
  { label: ' 5 ', value: '5' },
]
const ControlledPagination = () => {
  const [current, setCurrent] = useState(1)
  const [view, setView] = useState('10')

  const items = [
    { id: '1', label: 'title1' },
    { id: '2', label: 'title2' },
    { id: '3', label: 'title3' },
    { id: '4', label: 'title4' },
    { id: '5', label: 'title5' },
    { id: '6', label: 'title6' },
    { id: '7', label: 'title7' },
    { id: '8', label: 'title8' },
    { id: '9', label: 'title9' },
    { id: '10', label: 'title10' },
  ]

  const setPage = (currentPage: number) => {
    if (current > 0) {
      setCurrent(currentPage)
    }
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
      <Typography variant={'h2'}>Number of current page: {current}</Typography>
      <Typography variant={'h2'}>Count items on page: {view}</Typography>
      <ul>
        {items.slice(0, +view).map(el => (
          <li key={el.id}>{el.label}</li>
        ))}
      </ul>
      <Pagination
        currentPage={current}
        onChangePage={setPage}
        onValueChange={setView}
        options={options}
        pageSize={10}
        totalCount={200}
      />
    </div>
  )
}

export const ControlledDemo: Story = {
  args: {
    currentPage: 1,
    options: [],
    pageSize: 5,
    totalCount: 50,
  },
  render: () => <ControlledPagination />,
}

export const Demo: Story = {
  args: {
    currentPage: 1,
    options,
    pageSize: 10,
    totalCount: 200,
  },
}
