import logo from '../Logo.png'

type Props = {
  className?: string
}

export const Logo = ({ className }: Props) => {
  return <img alt={'Logo'} className={className} src={logo} />
}
