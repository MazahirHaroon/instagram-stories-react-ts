import type { Story } from '@constants/stories';

import { Overlay, Close } from '@instagram-ui';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

const StoryViewer = ({ story, onClose }: StoryViewerProps) => (
  <div className='fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]'>
    <Overlay className='h-12'>
      <span className='absolute top-4 right-2 text-white text-xl cursor-pointer'>
        <Close onClose={onClose} />
      </span>
    </Overlay>

    <div>
      <img
        src={story.src}
        alt={story.alt}
        className='max-h-full max-w-full object-contain'
      />
    </div>

    <div className='absolute bottom-0 h-12 bg-black w-full' />
  </div>
);

export default StoryViewer;
