import axios from "axios";

// access variables from spotify api App
const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientID = '6c7bb4c9478241c1bd4683c732dbe9aa';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-library-read', 'playlist-read-private'];

// Link for spotify api login
export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

// Api url for access the options
export const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

// declared method for api
export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    });
};