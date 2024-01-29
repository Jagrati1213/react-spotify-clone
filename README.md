# Spotify Song List App

Welcome to the Spotify Song List App! This application allows you to check out the most up-to-date song list of the Jagrati. To use this app, you need to have a access of mine Spotify account, and it leverages React.js, React Router, and the Spotify Web API.

## Features :

- **User Authentication:** Log in with mie Spotify account to access your personalized song list.
- **Up-to-Date Song List:** The app fetches mine current song list using the Spotify Web API to ensure you always have the latest information.
- **Easy Navigation:** Utilizing React Router for a smooth and seamless navigation experience.

## Tech Stack :

- **React.js:** A JavaScript library for building user interfaces.
- **React Router:** A standard library for routing in React applications.
- **Spotify Web API:** Interact with Spotify's music catalog, user's playlists, and more.

## Getting Started :

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Jagrati1213/react-spotify-clone.git
   ```

2. **Install dependencies:**
   ```bash
   cd react-spotify-clone
   npm install
   ```

3. **Configure Spotify API:**
   - Create a Spotify Developer account and create a new app to obtain your client ID and client secret.
   - Set the redirect URI in your Spotify Developer Dashboard to match your app's URI (e.g., http://localhost:3000/callback).

4. **Configure environment variables:**
   - Create a `.env` file in the root directory.
   - Add your Spotify API credentials:
     ```
     REACT_APP_SPOTIFY_CLIENT_ID=your-client-id
     REACT_APP_SPOTIFY_CLIENT_SECRET=your-client-secret
     REACT_APP_SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
     ```

5. **Start the app:**
   ```bash
   npm start
   ```

6. **Open your browser:**
   Visit `http://localhost:3000` to access the Spotify Song List App.

## Usage :

1. **Log In:**
   - Click the "Log In with Spotify" button.
   - Authorize the app to access your Spotify account.

2. **View Your Song List:**
   - Once logged in, you will be redirected to the main page displaying your up-to-date song list.

3. **Navigate Through Your Songs:**
   - Use the navigation bar or React Router links to explore different sections of the app.

4. **Log Out:**
   - Click the "Log Out" button to securely log out of your Spotify account.
   - 
Enjoy exploring your Spotify Song List! 🎶

## project screenshots:
![image](https://github.com/Jagrati1213/react-spotify-clone/assets/85276293/5a96613a-b2fd-4a7f-a1f7-b1c8247c635f)
![image](https://github.com/Jagrati1213/react-spotify-clone/assets/85276293/8815e1d3-9264-4d2c-a531-da9e4860e6ba)



