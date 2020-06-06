import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const numeral = require('numeral')

class ArtistInfo extends Component {
  
  
  
  
  render() {

    const artistInfo = (
      <div className='artist-info-card'>
        <div className="artist-info-card-header">
          <h1>{this.props.artist.artist.name}</h1>
        </div>
        <div className="artist-info-card-subtitle">
          <p className='subtitle-item'>Total Listeners:  {numeral(this.props.artist.artist.stats.listeners).format('0,0')} Play Count: {numeral(this.props.artist.artist.stats.playcount).format('0,0')}</p>
        </div>
        <div className="artist-info-card-bio">
        <h3 className='bio-title'>About:</h3>
          <p className='bio'>{this.props.artist.artist.bio.summary}</p>
        </div>
        <br/>
        <div className="return-home-container">
          <Link exact to={`/museable`}>Search for another artist</Link>
        </div>
      </div>
    )

    return (
      <div>
       {artistInfo}
      </div>
    )
  }
}


ArtistInfo.propTypes = {
  artist: PropTypes.object

}

const MapStateToProps = state => ({
  artist: state.artist


})

export default connect(MapStateToProps)(ArtistInfo)
