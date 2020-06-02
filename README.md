# Museable

**React & Redux Application that allow users to access the Lastfm API to get various artist information**

Live project viewable at: https://kyledkearney.github.io/museable/

---

## Local Deployment Instructions

Prequesities API KEY FROM LastFM: https://www.last.fm/api/

Install the dependencies with:

`$ npm install` or `$ yarn install`

setup a .env file at the root directory

inside your .env file add:

`REACT_APP_LASTFM_APIKEY=<your-api-key-goes-here>`

Start the development server with:

`$ npm start` or `$ yarn install`


## Icebox Feature

### Ability to add songs to your Spotify and Apple Music 

I will accomplish this by setting up an Action that requests an app autherization key from both services. Once the auth key has been recieved, a an action will be called to search up the song's / album's ID. Once the ID is recieved it will be saved into the store for when the user clicks on the add music to library button.

When the User clicks on the corresponding 'add music' button to their preffered service, it will trigger an Action to get User Authorization from that service, Once the auth response is recieved from the music service, an action will be called to post the song ID into their library.


