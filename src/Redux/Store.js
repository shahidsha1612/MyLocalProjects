import { createStore } from 'redux';
import playlistReducer from "./Reducers";

const store = createStore(playlistReducer)


export default store;