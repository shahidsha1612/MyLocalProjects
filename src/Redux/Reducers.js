import { ADD_PLAYLIST } from './Types'

const initialState = {

    Playlist: [



    ]
}

const playlistReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_PLAYLIST: return {
            ...state,
            Playlist: [...state.Playlist, { name: action.payload }]
        }
        default: return state
    }
}

export default playlistReducer;