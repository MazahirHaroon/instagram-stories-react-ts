import { DEFAULT_AVATAR_URL, type Profile } from '@constants/profiles';

interface StoryThumbnailProps extends Pick<Profile, 'avatar' | 'userName'> {
  viewStory: () => void;
  className?: string;
  viewedStory?: boolean;
}

const StoryThumbnail = ({
  avatar,
  userName,
  viewStory,
  className,
}: StoryThumbnailProps) => {
  return (
    <div
      onClick={() => viewStory()}
      className={`p-0.75 rounded-full border-2 border-gray-100 ${className}`}
    >
      <img
        className='p-0.5 h-full w-full object-contain bg-white rounded-full'
        src={avatar ?? DEFAULT_AVATAR_URL}
        alt={userName}
      />
    </div>
  );
};

export default StoryThumbnail;
