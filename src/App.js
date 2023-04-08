import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js'
import Player from './components/Player'
import { useDataLayerValue } from './DataLayer';


//creating an instance of spotify in our app aka communicate react with spotify
const spotify = new SpotifyWebApi()

function App() {
  // const [token, setToken] = useState(null) //useState is short term memory
  const [{ user, token }, dispatch] = useDataLayerValue() //decconstructure aka pull user from the data layer
  


  //run the code based on a given condition
  //we will get the token from the url when we click the agree after login in with spotify
  useEffect(() => {
    const hash = getTokenFromUrl() //step1: got the hash url

    const _token = hash.access_token //step2: got the token from the hash

    if (_token) {
      // setToken(_token) //if theres a token then set the token to that token 

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token) //heres the key that opens the door to the spotify api to go back and forth
      spotify.getMe()
             .then(user => {
                console.log({user})
                dispatch({//pop the token into the datalayer
                  type: 'SET_USER',
                  user: user
                })
             })
      
      spotify.getUserPlaylists()
             .then((playlists) => {
                dispatch({
                  type: 'SET_PLAYLISTS',
                  playlists: playlists
                })
             })
      spotify.getPlaylist('4yJzNIoNknZHcMRsvjAssJ')
             .then((playlist) => {
              dispatch({
                type: 'SET_DISCOVER_WEEKLY',
                discover_weekly: playlist,
              })
             })
    }
    console.log('my token is:', token)
  }, [])

  // console.log({token})

  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify} />
        ) : (
            <Login />
        )
      }
    </div>
  );
}

export default App;
