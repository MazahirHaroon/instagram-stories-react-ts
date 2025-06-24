import type { Story } from '@constants/stories';
import type { Profile } from '@constants/profiles';

import { profiles } from '@constants/profiles';

export type ProfileWithStory = Story & Pick<Profile, 'userName' | 'avatar'>;

export const profileMap = Object.fromEntries(
  profiles.map((profile) => [profile.id, profile])
);
