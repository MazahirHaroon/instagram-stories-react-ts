import type { Story } from '@constants/stories';
import StoryThumbnail from './StoryThumbnail';
import UsernameLabel from './UsernameLabel';

interface CarouselProps {
  items: Story[];
}

const Carousel = ({ items }: CarouselProps) => {
  return (
    <div className='flex flex-row gap-4 h-32 px-1.5 scrollbar-none overflow-x-auto overscroll-none scroll-smooth'>
      {items.map(({ id, userName, src, alt }) => (
        <div
          key={id}
          className='flex flex-col gap-1 items-center flex-shrink-0'
        >
          <StoryThumbnail src={src} alt={alt} />
          <UsernameLabel label={userName} />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
