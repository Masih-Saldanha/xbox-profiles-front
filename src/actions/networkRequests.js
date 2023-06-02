import axios from "axios";
// import jwt_decode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_BASE_URL;

// function getAxiosConfig(token) {
//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

// function returnDecodedToken(token) {
//   if (!token) {
//     return null;
//   };
//   return jwt_decode(token);
// };

// function signUp(username, password) {
//   return axios.post(`${BASE_URL}/auth/signup`, { username, password });
// };

// function signIn(username, password) {
//   return axios.post(`${BASE_URL}/auth/signin`, { username, password });
// };

// function postText(comment, userId, token) {
//   const config = getAxiosConfig(token);
//   return axios.post(`${BASE_URL}/comment/register`, { comment, userId }, config);
// };

function getAccountData(gamertag) {
  return axios.get(`${BASE_URL}/accountdata/${gamertag}`);
};

function getAchievements(gamertag) {
  return axios.get(`${BASE_URL}/achievements/${gamertag}`);
};

function getLastAchievements(gamertag) {
  return axios.get(`${BASE_URL}/lastachievements/${gamertag}`);
};

function getStatusOnLine(gamertag) {
  return axios.get(`${BASE_URL}/statusonline/${gamertag}`);
};

function getLastClips(gamertag) {
  return axios.get(`${BASE_URL}/lastclips/${gamertag}`);
};

function getFriendsList(gamertag) {
  return axios.get(`${BASE_URL}/friendslist/${gamertag}`);
};

const networkRequests = {
  getAccountData,
  getAchievements,
  getLastAchievements,
  getStatusOnLine,
  getLastClips,
  getFriendsList,
};

export default networkRequests;