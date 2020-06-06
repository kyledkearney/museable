import React from 'react'
import ListItem from './ListItem'
import { Table } from 'semantic-ui-react'

 function ItemList(props) {


    const albumHeader = (
     <>   
        <Table.HeaderCell>Album Title</Table.HeaderCell>
        <Table.HeaderCell>Play Count</Table.HeaderCell>
        <Table.HeaderCell>Last FM Link</Table.HeaderCell>
     </>   
    )
    const songHeader = (
     <>   
        <Table.HeaderCell>Song Title</Table.HeaderCell>
        <Table.HeaderCell>Play Count</Table.HeaderCell>
        <Table.HeaderCell>Listeners</Table.HeaderCell>
        <Table.HeaderCell>Last FM Link</Table.HeaderCell>
     </>   
    )


  return (
      <div className='list'>
            <Table.Header>
            <Table.Row>
            {props.type === 'TopTracks' ? songHeader : albumHeader}

            </Table.Row>
            </Table.Header>
          <ListItem queryType={props.type} artist={props.artist}/>
      </div>

  )
}

export default ItemList 
