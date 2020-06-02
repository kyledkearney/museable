import React, { Component } from 'react'
import SearchForm from './components/SearchForm'
import ArtistList from './components/ArtistList'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class Home extends Component {


  render() {
    return (
      <div className="App">
        <h1>Museable</h1>
        <h3>By: <a href="https://kyleswork.com" target='_blank' rel='noopener noreferrer'>Kyle Kearney</a></h3>
        <SearchForm/>
         <ArtistList/>
      </div>
    )
  }
}


export default connect()(Home)
