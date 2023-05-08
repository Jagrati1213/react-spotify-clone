import axios from "axios";

// access variables from spotify api App
const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientID = '6c7bb4c9478241c1bd4683c732dbe9aa';
const redirectUri = 'http://localhost:3000';
// const redirectUri = 'https://react-spotify-clone-1aqv.vercel.app/';
const scopes = ['user-library-read', 'playlist-read-private', 'user-read-recently-played', 'user-top-read'];

// Link for spotify api login
export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// Api url for access the options
export const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});


// set token
export const setLocalAccessToken = (token) => {
    setTokenTimestamp();
    window.localStorage.setItem('access_token', token);
};

// get tokens
export const getLocalAccessToken = () => window.localStorage.getItem('access_token');


// declared method for api
export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    });
};

export const logout = () => {
    window.localStorage.removeItem('token_timestamp');
    window.localStorage.removeItem('access_token');
    window.location.reload();
};