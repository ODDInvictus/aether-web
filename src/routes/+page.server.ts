import { Backend } from '$lib/backend';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  return {
    currentlyPlaying: Backend.getCurrentlyPlaying()
  };
}) satisfies PageServerLoad;