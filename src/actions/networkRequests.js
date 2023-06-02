import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;

function getAccountAndAchievementsData(gamertag) {
  return axios.get(`${BASE_URL}/accountandachievements/${gamertag}`);
};

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
  getAccountAndAchievementsData,
  getAccountData,
  getAchievements,
  getLastAchievements,
  getStatusOnLine,
  getLastClips,
  getFriendsList,
};

export default networkRequests;