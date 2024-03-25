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
import { DropDownMenu } from '@/components/ui/dropDownMenu/DropDownMenu'

import s from './headerDropDown.module.scss'

type Props = {
  logout: () => void
  profileData: ProfileData
}

export const HeaderDropDown = ({ logout, profileData }: Props) => {
  const trigger = <Avatar className={s.avatar} src={profileData.avatar} />

  return (
    <div className={s.wrapperDropDown}>
      <Typography className={s.profileName} variant={'subtitle1'}>
        {profileData.name}
      </Typography>
      <DropDownMenu align={'end'} trigger={trigger}>
        <DropDownMenuItem>
          <Avatar className={s.avatar} src={profileData.avatar} />

          <div>
            <Typography variant={'subtitle2'}>{profileData.name}</Typography>
            <Typography className={s.profileEmail} variant={'caption'}>
              {profileData.email}
            </Typography>
          </div>
        </DropDownMenuItem>
        <Separator />
        <DropDownMenuStandardItem icon={<Person />} value={'My Profile'} />
        <Separator />
        <DropDownMenuStandardItem icon={<LogOutIcon />} onClick={logout} value={'Sing Out'} />
      </DropDownMenu>
    </div>
  )
}
