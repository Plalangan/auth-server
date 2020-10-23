'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {
  const MEETUP_OAUTH_URL = 
  'https://secure.meetup.com/oauth2/access'
  + '?client_id=at77g05b0suuo27ke1tvrs9csn'
  + '&client_secret=bftj4rrn7aogbf3spnm4b4rrks'
  + '&grant_type=authorization_code'
  + '&redirect_uri=https://plalangan.github.io/meetup'
  + '&code=' + event.pathParameters.code;




const info = await axios.post(MEETUP_OAUTH_URL);

return {
  statusCode: 200,
  headers: {
  'Access-Control-Allow-Origin': '*'
  },
  body: JSON.stringify({
  access_token: info.data.access_token,
  refresh_token: info.data.refresh_token,
  }),
  };
 
};

module.exports.refreshAccessToken = async(event) => {
  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
  + '?client_id=at77g05b0suuo27ke1tvrs9csn'
  + '&client_secret=bftj4rrn7aogbf3spnm4b4rrks'
  + '&grant_type=refresh_token'
  + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
}