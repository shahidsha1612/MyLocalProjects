import { ADD_PLAYLIST } from './Types'


export const addPlaylist = (playlistName) => {
    return {
        type: ADD_PLAYLIST,
        payload: playlistName
    }
}