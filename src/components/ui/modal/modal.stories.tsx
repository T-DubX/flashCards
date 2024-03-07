import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'

import { Button, Modal } from '.'

const meta = {
  argTypes: {},
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/Modal',
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div></div>,
  },
  render: () => {
    const [show, setShow] = useState(false)

    const wrapperBtn = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
    }

    return (
      <>
        <Button onClick={() => setShow(true)} variant={'secondary'}>
          show
        </Button>

        <Modal onOpenChange={setShow} open={show}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti laboriosam
            maiores neque pariatur possimus quidem sed voluptate. Ab alias consequatur culpa debitis
            dicta ea eius eligendi fugit hic id impedit itaque iure laborum magni modi, molestiae
            mollitia nesciunt nostrum pariatur perferendis quae qui quia quisquam sint soluta vel
            voluptatibus.
          </p>
          <div style={wrapperBtn}>
            <Button variant={'secondary'}>Button Secondary</Button>
            <Button variant={'primary'}>Button primary</Button>
          </div>
        </Modal>
      </>
    )
  },
}

export const WithTitle: Story = {
  args: {
    children: <div></div>,
  },
  render: () => {
    const [show, setShow] = useState(false)

    const wrapperBtn = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
    }

    return (
      <>
        <Button onClick={() => setShow(true)} variant={'secondary'}>
          show
        </Button>

        <Modal onOpenChange={setShow} open={show} title={'modal'}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deleniti laboriosam
            maiores neque pariatur possimus quidem sed voluptate. Ab alias consequatur culpa debitis
            dicta ea eius eligendi fugit hic id impedit itaque iure laborum magni modi, molestiae
            mollitia nesciunt nostrum pariatur perferendis quae qui quia quisquam sint soluta vel
            voluptatibus.
          </p>
          <div style={wrapperBtn}>
            <Button variant={'secondary'}>Button Secondary</Button>
            <Button variant={'primary'}>Button primary</Button>
          </div>
        </Modal>
      </>
    )
  },
}

export const ChildrenInputs: Story = {
  args: {
    children: <div></div>,
  },
  render: () => {
    const [show, setShow] = useState(false)

    const wrapperBtn = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '12px 0',
    }

    return (
      <>
        <Button onClick={() => setShow(true)} variant={'secondary'}>
          show
        </Button>

        <Modal onOpenChange={setShow} open={show} title={'title'}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
              marginTop: '10px',
              width: '494px',
            }}
          >
            <Select label={'select'} options={[{ disabled: false, value: 'hello' }]} />
            <Input label={'input'} />
            <Input label={'input'} />
            <Checkbox id={'1'} label={'chekcbox'} />
          </div>
          <div style={wrapperBtn}>
            <Button variant={'secondary'}>Button Secondary</Button>
            <Button variant={'primary'}>Button primary</Button>
          </div>
        </Modal>
      </>
    )
  },
}
