import axios from "axios";

const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientID = '6c7bb4c9478241c1bd4683c732dbe9aa';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-library-read', 'playlist-read-private'];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = 'Bearer ' + token;
        return config;
    });
};