import * as ArtistInfoActions from './ArtistInfoActions'


const initialState = {
  artist: {
      name: 'null',
      stats: {
        listeners: 'null',
        playcount: 'null'
      },
      similar: {
        artist:[
            {
              name: 'null',
            }
        ]
      },
      bio: {
        summary: 'null',
      }

  },
  blank: null,
  topTracks: {
    toptracks: {
      track: [
          {
            name: 'null',
            url: 'null',
            playcount: 'null',
            listeners: 'null',
          }
      ]
    }
  },
  topAlbums: {
    topalbums: {
      album: [
          {
            name: 'null',
            url: 'null',
            playcount: 'null',
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
