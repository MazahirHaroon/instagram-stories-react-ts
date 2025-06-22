export interface Story {
  id: string;
  src: string;
  userName: string;
  profilePicture: string;
  type: 'image' | 'video';
  alt: string;
}

export const StoryActions = {
  NEXT: 'next',
  PREVIOUS: 'previous',
} as const;

export type StoryAction = (typeof StoryActions)[keyof typeof StoryActions];

export const stories: Story[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1602907021769-9f2eba51d061',
    userName: 'ashwini_c',
    profilePicture:
      'https://images.unsplash.com/photo-1665999719798-49a27ca9c97b?q=80&w=500',
    type: 'image',
    alt: 'A man wearing a Gandhi cap sitting on a charpai',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1638336260785-d4a35d8ae5f3?q=80&w=1227&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userName: 'vatra_voda',
    profilePicture:
      'https://images.unsplash.com/photo-1669555350922-deefa8f666ea?q=80&w=500',
    type: 'image',
    alt: 'a group of people standing in front of Taj Mahal',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1517747614396-d21a78b850e8',
    userName: 'izuddinhelmi',
    profilePicture:
      'https://images.unsplash.com/photo-1638368349569-e49499196d9f?q=80&w=500',
    type: 'image',
    alt: 'Football (soccer) training field at Kuantan',
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1523544545175-92e04b96d26b',
    userName: 'ashim_silva',
    profilePicture:
      'https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=500',
    type: 'image',
    alt: 'Mysore Palace',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1712901965138-9d62a8cc9e93',
    userName: 'rahul_dev',
    profilePicture:
      'https://images.unsplash.com/photo-1638368349569-e49499196d9f?q=80&w=500',
    type: 'image',
    alt: 'Man wearing a yellow turban smoking a cigarette',
  },
  {
    id: '6',
    src: 'https://images.unsplash.com/photo-1520312373131-a85680888414',
    userName: 'tom_walton',
    profilePicture:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500',
    type: 'image',
    alt: 'Woman celebrating Holi by throwing colored powder',
  },
  {
    id: '7',
    src: 'https://images.unsplash.com/photo-1629468571441-c556429b074e',
    userName: 'roshan_mohammed',
    profilePicture:
      'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=500',
    type: 'image',
    alt: 'Beach shore in Kerala lined with coconut trees',
  },
  {
    id: '8',
    src: 'https://images.unsplash.com/photo-1591851395311-65a7d160849a',
    userName: 'vivek_harshan',
    profilePicture:
      'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=500',
    type: 'image',
    alt: 'A boy in brown jacket sitting on brown rock during daytime',
  },
  {
    id: '9',
    src: 'https://images.unsplash.com/photo-1598266218608-c2b9fd3dde21',
    userName: 'adi_lica',
    profilePicture:
      'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=500',
    type: 'image',
    alt: 'Woman in a teal dress walking passing in front of Taj Mahal during daytime',
  },
  {
    id: '10',
    src: 'https://images.unsplash.com/photo-1678966432189-d58296e45ad2',
    userName: 'shubham_s',
    profilePicture:
      'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=500',
    type: 'image',
    alt: 'Yellow bus driving past India Gate',
  },
  {
    id: '11',
    src: 'https://images.unsplash.com/photo-1583513645242-25a32d451084',
    userName: 'sreehari_devadas',
    profilePicture:
      'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=500',
    type: 'image',
    alt: 'Green grass field in Kerala with trees and a mountain in the distance',
  },
  {
    id: '12',
    src: 'https://images.unsplash.com/photo-1629803099414-ef4eebf1f9fc',
    userName: 'sayooj_m',
    profilePicture:
      'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=500',
    type: 'image',
    alt: 'River flowing through dense green trees',
  },
  {
    id: '13',
    src: 'https://images.unsplash.com/photo-1586030138336-4a854c6ddb5f',
    userName: 'daniel_joshua',
    profilePicture:
      'https://images.unsplash.com/photo-1557844681-b0da6a516dc9?q=80&w=500',
    type: 'image',
    alt: 'Red and white lighthouse on a rock formation by the sea',
  },
];
