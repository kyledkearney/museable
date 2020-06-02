import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import Home from '../pages/Home'





const Root = ({ store }) => (
  <Provider store={store}>
      <Home/>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root
