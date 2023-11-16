import { PUBLIC_BACKEND_URL } from '$env/static/public'

async function get(route: string): Promise<Record<string, unknown>> {
  return fetch(PUBLIC_BACKEND_URL + route)
    .then(res => res.json())
}

async function post(route: string, body?: Record<string, unknown>): Promise<Record<string, unknown>> {
  return await fetch(PUBLIC_BACKEND_URL + route, {
    method: "POST",
    body: JSON.stringify(body)
  }).then(res => res.json())
}

export const Backend = {
  async getCurrentlyPlaying(): Promise<CurrentlyPlayingType> {
    return (await get('/state')).state as CurrentlyPlayingType
  },
  async play(spotifyId: string): Promise<Record<string, unknown>> {
    return await post(`/playlist/play?spotify_id=${spotifyId}`)
  }
}

export type CurrentlyPlayingType = {
  current: string
  trackTime: number
  track: TrackType
}

export type TrackType = {
  gid: string
  name: string
  album: AlbumType
  artist: ArtistType[]
  number: number
  discNumber: number
  duration: number
  popularity: number

}

export type AlbumType = {
  gid: string
  name: string
  artist: ArtistType[]
  label: string
  date: {
    year: number
    month: number
    day: number
  }
}

export type ArtistType = {
  gid: string
  name: string
}