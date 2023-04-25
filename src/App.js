import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { LeftMenu } from './components/sideMenu/LeftMenu';
import Login from './components/auth/Login';
import { setClientToken } from './spotify';
import { UserProfile } from './components/profile/UserProfile';
import { Index } from './components/library/Index';
import { Player } from './components/player/Player';
import { Artist } from './components/artist/Artist';

function App() {

  // create token
  const [token, setToken] = useState('');

  useEffect(() => {

    const token = window.localStorage.getItem('token');
    // To get the window location from #
    const hash = window.location.hash;
    window.location.hash = '';

    if (!token && hash) {
      //get the access token
      const access_token = hash.split('&')[0].split('=')[1];
      // Set in localstorage
      window.localStorage.setItem('token', access_token);
      setToken(access_token);
      setClientToken(access_token); //call the api function
    }
    else {
      setToken(token);
      setClientToken(token);
    }
  }, []);

  return (
    <>
      <Router>
        <div className="App w-full h-screen overflow-hidden flex relative">
          {
            !token ? (<Login />) :
              (
                <>
                  <LeftMenu />

                  <Routes>
                    <Route path='/' element={<UserProfile />} />
                    <Route path='/playlist' element={<Index />} />
                    <Route path='/player' element={<Player />} />
                    <Route path='/artist' element={<Artist />} />
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
