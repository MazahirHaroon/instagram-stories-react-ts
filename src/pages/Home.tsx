import { useState } from 'react';
import type { Story, StoryAction } from '@constants/stories';

import { Logo } from '@components';
import { Carousel, StoryViewer } from '@instagram-ui';

import { stories, StoryActions } from '@constants/stories';

const Home = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  const switchStory = (action: StoryAction) => {
    const currentIndex = stories.findIndex(({ id }) => id === activeStory?.id);
    switch (action) {
      case StoryActions.NEXT: {
        setActiveStory(stories[currentIndex + 1] ?? null);
        break;
      }
      case StoryActions.PREVIOUS: {
        setActiveStory(stories[currentIndex - 1] ?? null);
        break;
      }
    }
  };

  return (
    <div className='h-full'>
      {activeStory ? (
        <StoryViewer
          story={activeStory}
          switchStory={(action) => switchStory(action)}
          onClose={() => setActiveStory(null)}
        />
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
