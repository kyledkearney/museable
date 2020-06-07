import React from 'react'
import ListItem from './ListItem'
import { Table } from 'semantic-ui-react'

 function ItemList(props) {


    const albumHeader = (
     <>   
        <Table.HeaderCell>Album Title</Table.HeaderCell>
        <Table.HeaderCell>Play Count</Table.HeaderCell>
        {/* <Table.HeaderCell>+ Spotify</Table.HeaderCell>
        <Table.HeaderCell>+ Apple Music</Table.HeaderCell> */}
     </>   
    )
    const songHeader = (
     <>   
        <Table.HeaderCell>Song Title</Table.HeaderCell>
        <Table.HeaderCell>Play Count</Table.HeaderCell>
        <Table.HeaderCell>Listeners</Table.HeaderCell>
        {/* <Table.HeaderCell>+ Spotify</Table.HeaderCell>
        <Table.HeaderCell>+ Apple Music</Table.HeaderCell> */}
     </>   
    )


  return (
      <div className='list'>
        <Table celled>
            <Table.Header>
            <Table.Row>
            {props.type === 'TopTracks' ? songHeader : albumHeader}
            </Table.Row>
            </Table.Header>
            <Table.Body>
                <ListItem queryType={props.type} artist={props.artist}/>
            </Table.Body>
        </Table>
        
      </div>

  )
}

export default ItemList 
