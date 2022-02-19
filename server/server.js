var axios = require('axios');
var express = require('express');
const { fetchRepos } = require('./github');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.header("Access-Control-Allow-Headers","*")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.get('/token', function (req, res) {
  const GITHUB_AUTH_ACCESSTOKEN_URL = 'https://github.com/login/oauth/access_token';
  const CLIENT_ID = 'dee883ff4a36a8b386ca';
  const CLIENT_SECRET = '28b05752558c079c5e28c9a7e47ad2b7a568f51f';
  const CODE = req.query.code;

  axios({
    method: 'post',
    url: GITHUB_AUTH_ACCESSTOKEN_URL,
    headers: {
        'Accept': 'application/json'
    },
    data: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: CODE
    }
  })
  .then(function (response) {
    res.status(200).send(response.data);
  })
  .catch(function (error) {
    console.error('Error ' + error.message);
    res.status(400).send({error: error.message});
  })
});

app.get('/fetchRepos', fetchRepos);

app.listen(3001, function () {
  console.log('Server listening on port 3001');
});