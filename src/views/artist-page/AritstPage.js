import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Form, Radio } from 'semantic-ui-react'
import { searchArtistInfo } from '../../stores/artistInfo/ArtistInfoActions'
import ArtistInfo from './components/ArtistInfo'
import ItemList from './components/ItemList'

class ArtistPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'TopTracks'
    }
    this.handleChange = this.handleChange.bind(this)
  }


  componentDidMount() {
    const artist = this.props.match.params.artist
    
    this.props.searchArtistInfo(artist)
  }

 
    handleChange = (e, { value }) => {
      this.setState({ value })
    }
      
  

  render() {


    return (
      <div className="App">
        <ArtistInfo/>
        <div className="item-list">
        <div className='list-select'>
            <Form>
              <Form.Field>
                <Radio
                  label='Top Tracks'
                  name='radioGroup'
                  value='TopTracks'
                  checked={this.state.value === 'TopTracks'}
                  onChange={this.handleChange}
                />
                <Radio
                  label='Top Albums'
                  name='radioGroup'
                  value='TopAlbums'
                  checked={this.state.value === 'TopAlbums'}
                  onChange={this.handleChange}
                />
              </Form.Field> 
            </Form>
            <div className="top-items-container">
              <ItemList type={this.state.value} artist={this.props.match.params.artist}/>
            </div>
        </div>

      </div>
      </div>
    )
  }
}


ArtistPage.propTypes = {
  searchArtistInfo: PropTypes.func.isRequired,
}

export default connect(null, { searchArtistInfo })(ArtistPage)
