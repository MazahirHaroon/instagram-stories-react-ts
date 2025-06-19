import type { Story } from '@constants/stories';

const StoryThumbnail = ({ src, alt }: Pick<Story, 'src' | 'alt'>) => {
  return (
    <div className='p-0.75 h-17 w-17 bg-instagram-gradient rounded-full'>
      <img
        className='p-0.5 h-full w-full object-cover bg-white rounded-full'
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default StoryThumbnail;
