/**
 * Make the bot posting the msg
 * 
 * @param {Twit} bot 
 * @param {string} msg 
 */
function post(bot, msg) {
    bot.post("statuses/update", {
        status: `${msg}`
    }, (err, data, response) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${data.text} was tweeted!`);

    })
}

/**
 * Get friendship relation between current bot and the given handler
 * @param {Twit} bot 
 * @param {string} handler 
 */
function friendshipTypeRequest(bot, type, handler) {
    bot.post(type, {
        screen_name: handler
    }, (err, data, response) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);

    })
}
/**
 * Get followers for the given handler based on different type e.g.
 * "followers/ids" or "followers/list"
 * @param {Twit} bot 
 * @param {string} type 
 */
function followTypeRequest(bot, type) {
    bot.get(type, (err, data, response) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);

    })
}

/**
 * Get follower IDs for the given handler
 * 
 * @param {Twit} bot 
 * @param {string} handler 
 */
function getFollowerIds(bot, handler) {
    followTypeRequest(bot, "followers/ids");
}
/**
 * Get follower list for the given handler
 * 
 * @param {Twit} bot 
 * @param {string} handler 
 */
function getFollowerList(bot, handler) {
    followTypeRequest(bot, "followers/list");
}
/**
 * Get followed IDs for the given handler
 * 
 * @param {Twit} bot 
 * @param {string} handler 
 */
function getFollowedIds(bot, handler) {
    followTypeRequest(bot, "friends/ids");
}
/**
 * Get followed list for the given handler
 * 
 * @param {Twit} bot 
 * @param {string} handler 
 */
function getFollowedList(bot, handler) {
    followTypeRequest(bot, "friends/list");
}
/**
 * follow the given handler on twitter
 * @param {Twit} bot 
 * @param {string} handler 
 */
function follow(bot, handler) {
    friendshipTypeRequest(bot, "friendships/create", handler);
}
/**
 * get follow status from the given bot to the given handler
 * @param {Twit} bot 
 * @param {string} handler 
 */
function followStatus(bot, handler) {
    bot.get("friendships/lookup", {screen_name: handler}, (err, data, response) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);

    })
}


module.exports = {
    post,
    getFollowerIds,
    getFollowerList,
    getFollowedIds,
    getFollowedList,
    follow,
    followStatus,
    dm: require("./dm")
}