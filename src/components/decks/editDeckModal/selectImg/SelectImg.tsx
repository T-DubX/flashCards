import { CloseIcon } from '@/assets/icon/CloseIcon'
import { Button } from '@/components/auth/forgotPassword'

import s from './selectImg.module.scss'

type Props = {
  onClickDeleteImg: () => void
  src: string
}

export const SelectImg = ({ onClickDeleteImg, src }: Props) => {
  return (
    <div className={s.wrapperSelectImg}>
      <img alt={''} className={s.selectImg} src={src} />
      <Button as={'span'} className={s.deleteImgBtn} onClick={onClickDeleteImg} variant={'icon'}>
        <CloseIcon />
      </Button>
    </div>
  )
}
