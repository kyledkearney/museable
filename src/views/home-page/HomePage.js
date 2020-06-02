import React, { Component } from 'react'
import SearchForm from './components/SearchForm'
import ArtistList from './components/ArtistList'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

class Home extends Component {


  render() {
    return (
      <div className='main-container'>
          <div className="home-container">
            <div className="header-container">
              <h1 className='header'>Museable</h1>
              <h3>By: <a href="https://kyleswork.com" target='_blank' rel='noopener noreferrer'>Kyle Kearney</a></h3>
            </div>
        <SearchForm/>
         <ArtistList/>        
          </div>
      </div>
    )
  }
}


export default connect()(Home)
