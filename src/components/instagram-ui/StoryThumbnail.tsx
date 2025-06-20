import type { Story } from '@constants/stories';

interface StoryThumbnailProps extends Pick<Story, 'src' | 'alt'> {
  viewStory: () => void;
}

const StoryThumbnail = ({ src, alt, viewStory }: StoryThumbnailProps) => {
  return (
    <div
      onClick={() => viewStory()}
      className='p-0.75 h-17 w-17 bg-instagram-gradient rounded-full'
    >
      <img
        className='p-0.5 h-full w-full object-cover bg-white rounded-full'
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default StoryThumbnail;
