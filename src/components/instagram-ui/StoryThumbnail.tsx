import type { Story } from '@constants/stories';

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
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default StoryThumbnail;
