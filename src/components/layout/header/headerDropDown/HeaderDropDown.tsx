import { Person } from '@/assets/icon/Person'
import { ProfileData } from '@/components/layout/header'
import { Avatar } from '@/components/ui/avatar'
import {
  DropDownMenuItem,
  DropDownMenuStandardItem,
  LogOutIcon,
  Separator,
  Typography,
} from '@/components/ui/dropDownMenu'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'

import s from './headerDropDown.module.scss'

type Props = {
  logout: () => void
  profileData: ProfileData
}

export const HeaderDropDown = ({ logout, profileData }: Props) => {
  return (
    <DropdownMenu>
      <DropDownMenuItem>
        {profileData.avatar ? (
          <Avatar src={profileData.avatar} />
        ) : (
          <div className={s.avatar}></div>
        )}
        <Typography variant={'subtitle2'}>{profileData.name}</Typography>
        <Typography variant={'caption'}>{profileData.email}</Typography>
      </DropDownMenuItem>
      <Separator />
      <DropDownMenuStandardItem icon={<Person />} value={'My Profile'} />
      <Separator />
      <DropDownMenuStandardItem icon={<LogOutIcon />} onClick={logout} value={'Sing Out'} />
    </DropdownMenu>
  )
}
