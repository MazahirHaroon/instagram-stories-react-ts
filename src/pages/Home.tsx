import { useState } from 'react';
import type { Story } from '@constants/stories';

import { Logo } from '@components';
import { Carousel, StoryViewer } from '@instagram-ui';

import { stories } from '@constants/stories';

const Home = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  return (
    <div className='h-full'>
      {activeStory ? (
        <StoryViewer story={activeStory} onClose={() => setActiveStory(null)} />
      ) : (
        <>
          <Logo />
          <Carousel
            items={stories}
            viewStory={(story) => setActiveStory(story)}
          />
        </>
      )}
    </div>
  );
};

export default Home;
