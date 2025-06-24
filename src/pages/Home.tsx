import { useEffect, useState } from 'react';

import type { Story, StoryAction } from '@constants/stories';
import type { ProfileWithStory } from '@constants/common';

import { profileMap } from '@constants/common';
import { stories, StoryActions } from '@constants/stories';

import { Carousel, StoryViewer } from '@instagram-ui';

import { Logo } from '@components';

const Home = () => {
  const [activeStory, setActiveStory] = useState<Story | null>(null);
  const [profileWithStories, setProfileWithStories] = useState<
    ProfileWithStory[] | []
  >([]);

  useEffect(() => {
    const data = stories.map((story) => {
      const profileWithStory = profileMap[story.profileId];
      if (!profileWithStory) {
        throw new Error(
          `No profile found for story ${story.id} (profileId=${story.profileId})`
        );
      }
      return {
        ...story,
        userName: profileWithStory.userName,
        avatar: profileWithStory.avatar,
      };
    });

    setProfileWithStories(data);
  }, []);

  const switchStory = (action: StoryAction) => {
    const currentIndex = [...profileWithStories].findIndex(
      ({ id }) => id === activeStory?.id
    );
    switch (action) {
      case StoryActions.NEXT: {
        setActiveStory(profileWithStories[currentIndex + 1] ?? null);
        break;
      }
      case StoryActions.PREVIOUS: {
        setActiveStory(profileWithStories[currentIndex - 1] ?? null);
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
            items={profileWithStories}
            viewStory={(story) => setActiveStory(story)}
          />
        </>
      )}
    </div>
  );
};

export default Home;
