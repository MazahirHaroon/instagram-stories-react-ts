import type { Story } from '@constants/stories';

import { DEFAULT_AVATAR_URL } from '@constants/profiles';

interface StoryThumbnailProps extends Pick<Story, 'src' | 'alt'> {
  viewStory: () => void;
  className?: string;
}

const StoryThumbnail = ({
  src,
  alt,
  viewStory,
  className,
}: StoryThumbnailProps) => {
  return (
    <div
      onClick={() => viewStory()}
      className={`p-0.75 bg-instagram-gradient rounded-full ${className}`}
    >
      <img
        className='p-0.5 h-full w-full object-contain bg-white rounded-full'
        src={src ?? DEFAULT_AVATAR_URL}
        alt={alt}
      />
    </div>
  );
};

export default StoryThumbnail;
