import type { Story } from '@constants/stories';

import StoryThumbnail from './StoryThumbnail';
import UsernameLabel from './UsernameLabel';

interface CarouselProps {
  items: Story[];
  showLabel?: boolean;
  viewStory: (story: Story) => void;
}

const Carousel = ({ items, viewStory, showLabel = true }: CarouselProps) => {
  return (
    <div className='flex flex-row gap-4 h-32 px-1.5 scrollbar-none overflow-x-auto overscroll-none scroll-smooth'>
      {items.map((story) => {
        const { id, src, alt, userName } = story;
        return (
          <div
            key={id}
            className='flex flex-col gap-1 items-center flex-shrink-0'
          >
            <StoryThumbnail
              src={src}
              alt={alt}
              viewStory={() => viewStory(story)}
            />
            {showLabel && <UsernameLabel label={userName} />}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
