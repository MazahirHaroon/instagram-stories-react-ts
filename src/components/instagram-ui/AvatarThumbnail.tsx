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
      className={`p-0.75 rounded-full border-2 border-gray-100 ${className} ${
        isHighlighted ? 'bg-instagram-gradient' : ''
      }`}
    >
      <img
        className='p-0.5 h-full w-full object-contain bg-white rounded-full'
        src={avatar ?? DEFAULT_AVATAR_URL}
        alt={userName}
      />
    </div>
  );
};

export default AvatarThumbnail;
