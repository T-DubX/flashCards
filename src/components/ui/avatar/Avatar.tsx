import * as AvatarRadix from '@radix-ui/react-avatar'

export const Avatar = () => {
  return (
    <AvatarRadix.Root>
      <AvatarRadix.Image />
      <AvatarRadix.Fallback />
    </AvatarRadix.Root>
  )
}
