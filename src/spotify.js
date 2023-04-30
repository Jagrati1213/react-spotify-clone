import axios from "axios";

// access variables from spotify api App
const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientID = '6c7bb4c9478241c1bd4683c732dbe9aa';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-library-read', 'playlist-read-private', 'user-read-recently-played', 'user-top-read'];

// Link for spotify api login
export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// Api url for access the options
export const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

// TOKENS 
const expiring_time = 3600 * 1000; // 3600 seconds * 1000 = 1 hour in milliseconds

// set timing
const setTokenTimestamp = () => window.localStorage.setItem('token_timestamp', Date.now());

// set token
export const setLocalAccessToken = (token) => {
    setTokenTimestamp();
    window.localStorage.setItem('access_token', token);
};

// set refresh token
// const setLocalRefreshToken = token => window.localStorage.setItem('refresh_token', token);

// get tokens
const getTokenTimestamp = () => window.localStorage.getItem('token_timestamp');
export const getLocalAccessToken = () => window.localStorage.getItem('access_token');
// const getLocalRefreshToken = () => window.localStorage.getItem('refresh_token');


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
    // window.localStorage.removeItem('refresh_token');
    window.location.reload();
};