import type { ProfileWithStory } from '@constants/common';

import StoryThumbnail from './StoryThumbnail';
import UsernameLabel from './UsernameLabel';

interface CarouselProps {
  items: ProfileWithStory[];
  showLabel?: boolean;
  viewStory: (story: ProfileWithStory) => void;
}

const Carousel = ({ items, viewStory, showLabel = true }: CarouselProps) => {
  return (
    <div className='flex flex-row gap-4 h-32 px-1.5 scrollbar-none overflow-x-auto overscroll-none scroll-smooth'>
      {items.map((item) => {
        const { id, avatar, userName } = item;
        return (
          <div
            key={id}
            className='flex flex-col gap-1 items-center flex-shrink-0'
          >
            <StoryThumbnail
              avatar={avatar}
              userName={userName}
              viewStory={() => viewStory(item)}
              className='h-17 w-17'
            />
            {showLabel && <UsernameLabel label={userName} />}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
