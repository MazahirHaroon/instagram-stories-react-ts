import type { ProfileWithStory } from '@constants/common';

import { AvatarThumbnail, UsernameLabel } from '@instagram-ui';
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
            <AvatarThumbnail
              avatar={avatar}
              userName={userName}
              clickAction={() => viewStory(item)}
              className='h-17 w-17'
              isHighlighted={true}
            />
            {showLabel && <UsernameLabel label={userName} className='w-18' />}
          </div>
        );
      })}
    </div>
  );
};

export default Carousel;
