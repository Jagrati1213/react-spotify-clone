import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { LeftMenu } from './components/sideMenu/LeftMenu';
import Login from './components/auth/Login';
import { setClientToken, getLocalAccessToken, setLocalAccessToken } from './spotify';
import { UserProfile } from './components/profile/UserProfile';
import { Index } from './components/library/Index';
import Recent from './components/recentTracks/Recent';
import Toptrack from './components/topTrack/Toptrack';
import PlaylistDetails from './components/library/PlaylistDetails';
import Album from './components/album/Album';
import { AlbumDetails } from './components/album/AlbumDetails';
import HistoryArrows from './components/HistoryArrows';
import SpotifyWebApi from 'spotify-web-api-js';

const spotify = new SpotifyWebApi();

function App() {

  // create token
  const [accesstoken, setAccessToken] = useState('');


  useEffect(() => {

    // const token = window.localStorage.getItem('token');
    const token = getLocalAccessToken();

    // To get the window location from #
    const hash = window.location.hash;
    window.location.hash = '';

    if (!token && hash) {
      //get the access token
      const access_token = hash.split('&')[0].split('=')[1];
      // Set in localstorage
      // window.localStorage.setItem('token', access_token);
      setLocalAccessToken(access_token);

      setAccessToken(access_token);
      setClientToken(access_token); //call the api login
      spotify.setAccessToken(access_token);
    }
    else {
      setAccessToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    <>
      <Router>
        <div className="App w-full min-h-screen overflow-hidden flex relative lg:flex-row flex-col-reverse ">
          {
            // !accesstoken ? (<Login />) : 'soosisisi'
            !accesstoken ? 'soosisisi' :
              (
                <>
                  <HistoryArrows />
                  <LeftMenu />
                  <Routes>
                    <Route path='/' element={<UserProfile />} />
                    <Route path='/playlist' element={<Index />} />
                    <Route path='/playlist/:id' element={<PlaylistDetails />} />
                    <Route path='/albums/:id' element={<AlbumDetails />} />
                    <Route path='/recent' element={<Recent />} />
                    <Route path='/tracks' element={<Toptrack />} />
                    <Route path='/albums' element={<Album />} />

                  </Routes>
                </>
              )
          }

        </div>
      </Router>
    </>
  );
}

export default App;
