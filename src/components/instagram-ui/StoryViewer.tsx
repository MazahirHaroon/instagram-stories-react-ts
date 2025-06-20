import type { Story } from '@constants/stories';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}

const StoryViewer = ({ story, onClose }: StoryViewerProps) => (
  <div className='fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]'>
    <span className='absolute top-4 right-2 text-white text-xl cursor-pointer'>
      <button onClick={() => onClose()}>X</button>
    </span>

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
