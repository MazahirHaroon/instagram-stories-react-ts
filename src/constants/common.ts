import type { Story } from './stories';
import { profiles, type Profile } from './profiles';

export type ProfileWithStory = Story & Pick<Profile, 'userName' | 'avatar'>;

export const profileMap = Object.fromEntries(
  profiles.map((profile) => [profile.id, profile])
);
