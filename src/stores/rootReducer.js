import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import artistInfoReducers from './artistInfo/ArtistInfoReducers'

export default function rootReducer(history) {
  const reducerMap = {
    artist: artistInfoReducers,
    router: connectRouter(history),


  };

  return combineReducers(reducerMap);
}
