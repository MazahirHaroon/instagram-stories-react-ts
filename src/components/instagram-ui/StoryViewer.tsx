import type { Story, StoryAction } from '@constants/stories';
import { StoryActions } from '@constants/stories';
import { Overlay, Close } from '@instagram-ui';

interface StoryViewerProps {
  story: Story;
  onClose: () => void;
  switchStory: (action: StoryAction) => void;
}

const StoryViewer = ({ story, onClose, switchStory }: StoryViewerProps) => (
  <div className='fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999]'>
    <Overlay className='h-12'>
      <span className='absolute top-4 right-2 text-white text-xl cursor-pointer z-[20]'>
        <Close onClose={onClose} />
      </span>
    </Overlay>

    <div className='fixed top-12 h-full w-full'>
      <button
        onClick={() => switchStory(StoryActions.PREVIOUS)}
        className='h-full w-1/2'
      ></button>
      <button
        onClick={() => switchStory(StoryActions.NEXT)}
        className='h-full w-1/2 '
      ></button>
    </div>

    <div>
      <img
        src={story.src}
        alt={story.alt}
        className='max-h-full max-w-full object-contain'
      />
    </div>

    <div className='absolute bottom-0 h-12 bg-black w-full z-[20]' />
  </div>
);

export default StoryViewer;
