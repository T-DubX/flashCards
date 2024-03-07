import type { Meta, StoryObj } from '@storybook/react'

import {
  DropDownMenu,
  DropDownMenuItem,
  DropDownMenuStandardItem,
  DropdownMenu,
  EditTwoOutline,
  LogOutIcon,
  MoreIcon,
  PersonIcon,
  PlayCircle,
  Separator,
  Trash,
  Typography,
} from '.'

const meta = {
  component: DropDownMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Components/DropDownMenu',
} satisfies Meta<typeof DropDownMenu>

export default meta
type Story = StoryObj<typeof meta>

const Avatar = () => {
  return (
    <img
      alt={'avatar'}
      src={
        'https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      }
      style={{ borderRadius: '50%', height: 36, width: 36 }}
    />
  )
}

export const Person: Story = {
  args: {
    align: 'end',
    children: <div></div>,
    trigger: <Avatar />,
  },
  render: () => {
    return (
      <DropDownMenu trigger={<Avatar />}>
        <DropdownMenu.Group>
          <DropDownMenuItem>
            <Avatar />

            <div>
              <Typography variant={'subtitle2'}>Name</Typography>
              <Typography variant={'caption'}>j&johnson@gmail.com</Typography>
            </div>
          </DropDownMenuItem>
          <Separator />
          <DropDownMenuStandardItem icon={<PersonIcon />} value={'My Profile'} />
          <Separator />
          <DropDownMenuStandardItem icon={<LogOutIcon />} value={'Sign Out'} />
        </DropdownMenu.Group>
      </DropDownMenu>
    )
  },
}

export const More: Story = {
  args: {
    align: 'end',
    children: <div></div>,
    trigger: <MoreIcon />,
  },
  render: () => {
    return (
      <DropDownMenu trigger={<MoreIcon />}>
        <DropdownMenu.Group>
          <DropDownMenuStandardItem icon={<PlayCircle />} value={'Learn'} />
          <Separator />
          <DropDownMenuStandardItem icon={<EditTwoOutline />} value={'Edit'} />
          <Separator />
          <DropDownMenuStandardItem icon={<Trash />} value={'Delete'} />
        </DropdownMenu.Group>
      </DropDownMenu>
    )
  },
}
