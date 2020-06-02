import React, { Component } from 'react'
import '../App.css';
import SearchForm from '../views/home-page/components/SearchForm'
import SimilarArtists from '../views/home-page/components/ArtistList'
import ArtistInfo from '../components/ArtistInfo'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

class Home extends Component {


  render() {
    return (
      <div className="App">
        <h1>Museable</h1>
        <h3>By: <a href="https://kyleswork.com" target='_blank' rel='noopener noreferrer'>Kyle Kearney</a></h3>
        <SearchForm/>
         <SimilarArtists/>
      </div>
    )
  }
}


export default connect()(Home)
