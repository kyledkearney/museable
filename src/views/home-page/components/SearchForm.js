import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { Form, Button, Input} from 'semantic-ui-react'
import { searchArtistInfo } from '../../../stores/artistInfo/ArtistInfoActions'

class SearchForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
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

 

  
  
  render() {
    return (
      <div className='search-form-container'>
          <Form onSubmit={this.onSubmit} className='search-form'>
          <Form.Field>
            <label htmlFor="">Search for a Artist </label>
            <Input type='text' name='userInput' placeholder='50 Cent' onChange={this.onChange} value={this.state.userInput} >
            <input />
            <Button type='submit'>Search</Button>
          </Input>
          </Form.Field>
        </Form>
      </div>
    )
  }
}

SearchForm.propTypes = {
  searchArtistInfo: PropTypes.func.isRequired,
}

export default connect(null, { searchArtistInfo })(SearchForm)


