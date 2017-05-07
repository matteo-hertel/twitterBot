require('dotenv').config({
    path: `${__dirname}/.env`
});
const botActions = require("./modules/twitterBot/actions");

const Twit = require("twit");

const bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY, 
    consumer_secret: process.env.CONSUMER_SECTET, 
    access_token: process.env.ACCESS_TOKEN, 
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000
});

// botActions.post(bot, `Hello world!`);
// botActions.getFollowerList(bot, `MHDev91`);
// botActions.getFollowedList(bot, `MHDev91`);
// botActions.follow(bot, `angular`);
botActions.followStatus(bot, `angular`)