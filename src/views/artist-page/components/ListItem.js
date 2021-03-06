import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { searchTopTracks, searchTopAlbums } from '../../../stores/artistInfo/ArtistInfoActions'
import { Table } from 'semantic-ui-react'
const numeral = require('numeral')

 class ListItem extends Component {
  componentDidMount() {
    this.props.searchTopTracks(this.props.artist)
    this.props.searchTopAlbums(this.props.artist)

    console.log(this.props.topAlbums.topalbums.album[0].name)

  }


  listItem() {
   const songItem = this.props.topTracks.toptracks.track.slice(0,20).map(track => (
      <Table.Row key={track.name}>
        <Table.Cell><a href={track.url} target='_blank' rel='noopener noreferrer'>{track.name}</a></Table.Cell>
        <Table.Cell className='inline-text'>{numeral(track.playcount).format('0,0')}</Table.Cell>
        <Table.Cell className='inline-text'>{numeral(track.listeners).format('0,0')}</Table.Cell>
   
      </Table.Row>
    ))

    const albumItem = this.props.topAlbums.topalbums.album.slice(0,10).map(album => (
      <Table.Row key={album.name}>
        <Table.Cell className='inline-text'><a href={album.url} target='_blank' rel='noopener noreferrer'>{album.name}</a></Table.Cell>
        <Table.Cell className='inline-text'>{numeral(album.playcount).format('0,0')}</Table.Cell>
      </Table.Row>
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
