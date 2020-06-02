import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { searchArtistInfo } from '../../../stores/artistInfo/ArtistInfoActions'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.formReset = this.formReset.bind(this)
  }



// * When text is input into search box the state of userInput is updated
  onChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

// * When Form is submitted it will call the action searchSimilarArtists
  onSubmit(event) {
    event.preventDefault()

    this.props.searchArtistInfo(this.state.userInput)

    this.setState({userInput: ''})
  }

  formReset(event) {
    event.preventDefault()

    this.setState({userInput: ''})
  }
 

  
  
  render() {
    return (
      <div className='search-form-container'>
          <form onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="">Search</label> <br/>
            <input name='userInput'type="text" onChange={this.onChange} value={this.state.userInput}/>
            {this.state.userInput ? <button onClick={this.formReset}>X</button> : ''}
          </div>
          <br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  searchArtistInfo: PropTypes.func.isRequired,
}

export default connect(null, { searchArtistInfo })(SearchForm)
