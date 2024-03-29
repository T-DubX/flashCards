import { Link } from 'react-router-dom'

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
import { useLogoutMutation } from '@/services/auth'

import s from './headerDropDown.module.scss'

type Props = {
  profileData: ProfileData
}

export const HeaderDropDown = ({ profileData }: Props) => {
  const [logout] = useLogoutMutation()

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
        <Link className={s.profileLink} to={'/profile'}>
          <DropDownMenuStandardItem icon={<Person />} value={'My Profile'} />
        </Link>
        <Separator />
        <DropDownMenuStandardItem
          icon={<LogOutIcon />}
          onClick={() => logout()}
          value={'Sing Out'}
        />
      </DropDownMenu>
    </div>
  )
}
