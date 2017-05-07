require('dotenv').config({
    path: `${__dirname}/.env`
});

const Twit = require("twit");

const bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY, 
    consumer_secret: process.env.CONSUMER_SECTET, 
    access_token: process.env.ACCESS_TOKEN, 
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

