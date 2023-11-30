import icons from './iconsSprite.svg'

type IIconProps = {
  name:
      'messages' |
      'users' |
      'user' |
      'unPublishIcon' |
      'trash' |
      'publish' |
      'ok' |
      'menu' |
      'logout' |
      'info' |
      'error' |
      'eye-slash' |
      'eye' |
      'edit' |
      'cancel' |
      'arrow-up' |
      'arrow-left' |
      'arrow-down' |
      'isPublishedIcon' |
      'isUnpublishedIcon';
  size?: number;
  color?: string;
}

export function Icons({ name, size = 20, color }: IIconProps) {
  return (
      <svg width={size} height={size} stroke={color}>
        <use href={`${icons}#${name}`} />
      </svg>
  )
}
