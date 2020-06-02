import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'



class ArtistList extends Component {

  

  render() {

    const artistList = (
      <div className='artist-list'>
        <Link to={`/artist/${this.props.artist.artist.name}`}>{this.props.artist.artist.name}</Link>

        {this.props.artist.artist.similar.artist.map(artist => (
          <Link exact to={`/artist/${artist.name}`}>{artist.name}</Link>
        ))}
        
      </div>
    )

    return (
      <div>
        {artistList}
      </div>
    )
  }

  onClick =  (event) => {
      //  this.props.searchArtist(event.target.name)
      

  }
}

ArtistList.propTypes = {
  artist: PropTypes.object
  // searchTopAlbums: PropTypes.func.isRequired,
  // searchTopSongs: PropTypes.func.isRequired,
 

}

const MapStateToProps = state => ({
  artist: state.artist


})

export default connect(MapStateToProps)(ArtistList)
