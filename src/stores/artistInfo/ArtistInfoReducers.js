import * as ArtistInfoActions from './ArtistInfoActions'


const initialState = {
  artist: {
      name: '',
      stats: {
        listeners: '',
        playcount: ''
      },
      similar: {
        artist:[
            {
              name: '',
            }
        ]
      },
      bio: {
        summary: '',
      }

  },
  blank: null,
  topTracks: {
    toptracks: {
      track: [
          {
            name: '',
            url: '',
            playcount: '',
            listeners: '',
          }
      ]
    }
  },
  topAlbums: {
    topalbums: {
      album: [
          {
            name: '',
            url: '',
            playcount: '',
          }
      ]
    }
  },

}


export default function artistInfoReducers (state = initialState, action) {
  switch(action.type) {
    case ArtistInfoActions.SEARCH_ARTIST_INFO:
      return {
        ...state,
       artist: action.payload
      }
      case ArtistInfoActions.SEARCH_TOP_TRACKS:
      return {
        ...state,
        topTracks: action.payload
      }
      case ArtistInfoActions.SEARCH_TOP_ALBUMS:
      return {
        ...state,
        topAlbums: action.payload
      }
    default:
      return state;
  } 

}
