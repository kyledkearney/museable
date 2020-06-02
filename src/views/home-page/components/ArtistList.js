import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'



class ArtistList extends Component {

  

  render() {

    const artistList = (
      <div className='artist-list'>

            <div className="artist-link-container">
                <Link className='artist-link' to={`/artist/${this.props.artist.artist.name}`}>{this.props.artist.artist.name}</Link>
            </div>

        {this.props.artist.artist.similar.artist.map(artist => (
          <div className="artist-link-container" key={artist.name}>
              <Link exact to={`/artist/${artist.name}`}>{artist.name}</Link>
          </div>
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
