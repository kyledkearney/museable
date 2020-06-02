import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { searchTopTracks, searchTopAlbums } from '../../../stores/artistInfo/ArtistInfoActions'

 class ListItem extends Component {
  componentDidMount() {
    this.props.searchTopTracks(this.props.artist)
    this.props.searchTopAlbums(this.props.artist)

    console.log(this.props.topAlbums.topalbums.album[0].name)

  }


  listItem() {
   const songItem = this.props.topTracks.toptracks.track.slice(0,20).map(track => (
      <li key={track.name}>
        <h5>{track.name}</h5>
        <p>{track.playcount}</p>
        <p>{track.listeners}</p>
        <a href={track.url} target='_blank' rel='noopener noreferrer'>Check out The Song!</a>
      </li>
    ))

    const albumItem = this.props.topAlbums.topalbums.album.slice(0,10).map(album => (
      <li key={album.name}>
        <h5>{album.name}</h5>
        <p>{album.playcount}</p>
        <a href={album.url} target='_blank' rel='noopener noreferrer'>Check Out The Album!</a>
      </li>
    ))


    switch(this.props.queryType) {
      case 'TopAlbums':
        return albumItem
      case 'TopTracks':
        return songItem
      default:
        return songItem
    }

  }


  render() {
    return (
      <>
        {this.listItem()}
      </>
    )
  }
}


ListItem.propTypes = {
  topTracks: PropTypes.object,
  topAlbums: PropTypes.object,
  searchTopTracks: PropTypes.func.isRequired,
  searchTopAlbums: PropTypes.func.isRequired,
}

const MapStateToProps = state => ({
  topTracks: state.artist.topTracks,
  topAlbums: state.artist.topAlbums,


})

export default connect(MapStateToProps, { searchTopTracks, searchTopAlbums})(ListItem)
