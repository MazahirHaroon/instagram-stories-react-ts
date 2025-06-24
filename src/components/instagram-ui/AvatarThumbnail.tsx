import { DEFAULT_AVATAR_URL, type Profile } from '@constants/profiles';

interface AvatarThumbnailProps extends Pick<Profile, 'avatar' | 'userName'> {
  clickAction: () => void;
  className?: string;
  isHighlighted?: boolean;
}

const AvatarThumbnail = ({
  avatar,
  userName,
  clickAction,
  className,
  isHighlighted = false,
}: AvatarThumbnailProps) => {
  return (
    <div
      onClick={() => clickAction()}
      className={`rounded-full  ${className} ${
        isHighlighted
          ? ' p-0.75 bg-instagram-gradient'
          : 'border-2 border-gray-100'
      }`}
    >
      <img
        className={`h-full w-full object-contain rounded-full ${
          isHighlighted ? 'p-0.5 bg-white' : ''
        } `}
        src={avatar ?? DEFAULT_AVATAR_URL}
        alt={userName}
      />
    </div>
  );
};

export default AvatarThumbnail;
