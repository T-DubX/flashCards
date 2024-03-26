import clsx from 'clsx'

import s from './spinner.module.scss'

type Props = {
  className?: string
}

export const Spinner = ({ className }: Props) => {
  return <div className={clsx(s.loader, className)}></div>
}
