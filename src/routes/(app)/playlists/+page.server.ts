import type { PageServerLoad } from './$types';

export const load = (async () => {
  const favoritePlaylists = [
    { name: 'Invictus Hitjes', id: 'spotify:playlist:3ATkm5SqvN1wNdm3Rcct8B' },
    { name: 'Generieke rock', id: 'spotify:playlist:123DpNHvw00Icw1hmGCeLR' },
    { name: 'JoyRadio', id: 'spotify:playlist:2rBpTl0boVy5SiqnHzbSz5' },
  ]

  const playlists = [
    { name: 'This is Weezer', id: 'spotify:playlist:37i9dQZF1DZ06evO1VmDYs' },
    { name: 'Rockmix', id: 'spotify:playlist:1onvD9UO4R3X5tm1TQOUXT' },
  ]

  favoritePlaylists.push(...playlists)

  return {
    playlists: favoritePlaylists
  };
}) satisfies PageServerLoad;