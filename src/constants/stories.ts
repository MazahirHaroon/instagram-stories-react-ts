export interface Story {
  id: string;
  profileId: string;
  src: string;
  type: 'image' | 'video';
  alt: string;
}

export const StoryActions = {
  NEXT: 'next',
  PREVIOUS: 'previous',
} as const;

export type StoryAction = (typeof StoryActions)[keyof typeof StoryActions];

export interface Profile {
  id: string;
  userName: string;
  avatar: string;
}

export const stories: Story[] = [
  {
    id: 'story_1',
    profileId: 'profile_8',
    src: 'https://images.unsplash.com/photo-1602907021769-9f2eba51d061',
    type: 'image',
    alt: 'A man wearing a Gandhi cap sitting on a charpai',
  },
  {
    id: 'story_2',
    profileId: 'profile_2',
    src: 'https://images.unsplash.com/photo-1712901965138-9d62a8cc9e93',
    type: 'image',
    alt: 'Man wearing a yellow turban smoking a cigarette',
  },
  {
    id: 'story_5',
    profileId: 'profile_4',
    src: 'https://images.unsplash.com/photo-1517747614396-d21a78b850e8',
    type: 'image',
    alt: 'Football training field at Kuantan',
  },
  {
    id: 'story_7',
    profileId: 'profile_5',
    src: 'https://images.unsplash.com/photo-1523544545175-92e04b96d26b',
    type: 'image',
    alt: 'Mysore Palace',
  },
  {
    id: 'story_9',
    profileId: 'profile_6',
    src: 'https://images.unsplash.com/photo-1638336260785-d4a35d8ae5f3',
    type: 'image',
    alt: 'Group of people in front of the Taj Mahal',
  },
  {
    id: 'story_11',
    profileId: 'profile_14',
    src: 'https://images.unsplash.com/photo-1520312373131-a85680888414',
    type: 'image',
    alt: 'Woman celebrating Holi by throwing colored powder',
  },
  {
    id: 'story_13',
    profileId: 'profile_2',
    src: 'https://images.unsplash.com/photo-1629468571441-c556429b074e',
    type: 'image',
    alt: 'Beach shore in Kerala lined with coconut trees',
  },
  {
    id: 'story_15',
    profileId: 'profile_1',
    src: 'https://images.unsplash.com/photo-1591851395311-65a7d160849a',
    type: 'image',
    alt: 'A boy in a brown jacket sitting on a rock',
  },
  {
    id: 'story_17',
    profileId: 'profile_3',
    src: 'https://images.unsplash.com/photo-1598266218608-c2b9fd3dde21',
    type: 'image',
    alt: 'A woman in teal dress walking in front of Taj Mahal',
  },
];
