

export const SEARCH_ARTIST_INFO = 'SEARCH_ARTIST_INFO'
export const SEARCH_TOP_TRACKS = 'SEARCH_TOP_TRACKS'
export const SEARCH_TOP_ALBUMS = 'SEARCH_TOP_ALBUMS'


const baseURL = 'http://ws.audioscrobbler.com/2.0/?method=artist' 

export const searchArtistInfo = (selectedArtist) => dispatch => {
  fetch(`${baseURL}.getInfo&artist=${selectedArtist}&api_key=${process.env.REACT_APP_LASTFM_APIKEY}&format=json`)
  .then(res => res.json())
  .then(data => dispatch ({
    type: SEARCH_ARTIST_INFO,
    payload: data.artist
  }))
}


export const searchTopTracks = (selectedArtist) => dispatch => {

  fetch(`${baseURL}.gettoptracks&artist=${selectedArtist}&api_key=${process.env.REACT_APP_LASTFM_APIKEY}&format=json`)
  .then(res => res.json())
  .then(data => dispatch ({
    type: SEARCH_TOP_TRACKS,
    payload: data
  }))
}
export const searchTopAlbums = (selectedArtist) => dispatch => {

  fetch(`${baseURL}.gettopalbums&artist=${selectedArtist}&api_key=${process.env.REACT_APP_LASTFM_APIKEY}&format=json`)
  .then(res => res.json())
  .then(data => dispatch ({
    type: SEARCH_TOP_ALBUMS,
    payload: data
  }))
}
