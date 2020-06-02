import React from 'react'
import ListItem from './ListItem'

 function ItemList(props) {



  return (
      <ul className='list'>
          <ListItem queryType={props.type} artist={props.artist}/>
      </ul>

  )
}

export default ItemList 
