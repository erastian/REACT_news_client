import icons from './iconsSprite.svg'

type IIconProps = {
  name:
      'messages' |
      'users' |
      'user' |
      'unpublish' |
      'trash' |
      'publish' |
      'ok' |
      'menu' |
      'logout' |
      'info' |
      'eye-slash' |
      'eye' |
      'edit' |
      'cancel' |
      'arrow-up' |
      'arrow-left' |
      'arrow-down';
  size?: number;
}

export function Icons({ name, size = 20 }: IIconProps) {
  return (
      <svg width={size} height={size}>
        <use href={`${icons}#${name}`} />
      </svg>
  )
}
