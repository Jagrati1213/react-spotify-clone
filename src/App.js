import { useEffect, useState } from 'react';
import './App.css';
import { LeftMenu } from './components/LeftMenu';
import { MainContainer } from './components/MainContainer';
import { RightMenu } from './components/RightMenu';
import Login from './screens/auth/Login';
import { setClientToken } from './spotify';

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
      setClientToken(access_token);
    }
    else {
      setToken(token);
      setClientToken(token);
    }
  }, []);
  return (
    <div className="App w-full h-screen overflow-hidden flex">
      {
        !token ? (<Login />) :
          (
            <>
              <LeftMenu />
              <MainContainer />
              <RightMenu />
            </>

          )
      }
    </div>
  );
}

export default App;
