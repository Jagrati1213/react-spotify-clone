const authEndpoint = 'https://accounts.spotify.com/authorize?';
const clientID = '6c7bb4c9478241c1bd4683c732dbe9aa';
const redirectUri = 'http://localhost:3000';
const scopes = ['user-library-read', 'playlist-read-private'];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;


//#access_token=BQDR3h1XFulYe8Eys8123kNqdDCPYxvnHDTpClRzHp6Zu3W2QVyXWL-uoYJjPs50PxgJrNFrPxNO0VCpn2pqdBuP22AcJtSh2FlJyJ3xKf_LkfO8e6p1XGOyMmLn99NWGyOdtoB4WFmjRZY1_kEQBZ4WiF508q7MMwNmXtihLr6qHTQANjgI0FCk04keu0SVjMaTMkUhedfVXqUqjnCOGqe9&token_type=Bearer&expires_in=3600