export interface Profile {
  id: string;
  userName: string;
  avatar: string | null;
}

const unsplashImageFormatParams = 'auto=format&fit=crop&w=150&h=150&crop=faces';

export const DEFAULT_AVATAR_URL = '/default-avatar.png';

export const profiles: Profile[] = [
  {
    id: 'profile_1',
    userName: 'ashwini_c',
    avatar: `https://images.unsplash.com/photo-1665999719798-49a27ca9c97b?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_2',
    userName: 'roshan_mohammed',
    avatar: `https://images.unsplash.com/photo-1748416100946-3703ba688db8?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_3',
    userName: 'adi_lica',
    avatar: `https://images.unsplash.com/photo-1635358154434-5254df331548?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_4',
    userName: 'izuddinhelmi',
    avatar: `https://images.unsplash.com/photo-1653851796494-4e36081f2b65?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_5',
    userName: 'ashim_silva',
    avatar: `https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_6',
    userName: 'tom_walton',
    avatar: `https://images.unsplash.com/photo-1500648767791-00dcc994a43e?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_7',
    userName: 'vatra_voda',
    avatar: `https://images.unsplash.com/photo-1669555350922-deefa8f666ea?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_8',
    userName: 'vivek_harshan',
    avatar: `https://images.unsplash.com/photo-1570950374958-d4971246e8bb?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_10',
    userName: 'ajin_k_s',
    avatar: `https://images.unsplash.com/photo-1626535153472-f9a04fc0d593?${unsplashImageFormatParams}`,
  },
  {
    id: 'profile_11',
    userName: 'shubham_s',
    avatar: null,
  },
  {
    id: 'profile_12',
    userName: 'sreehari_devadas',
    avatar: null,
  },
  {
    id: 'profile_13',
    userName: 'sayooj_m',
    avatar: null,
  },
  {
    id: 'profile_14',
    userName: 'daniel_joshua',
    avatar: null,
  },
  {
    id: 'profile_15',
    userName: 'rahul_dev',
    avatar: null,
  },
];
