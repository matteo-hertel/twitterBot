/**
 * Send msg as direct message to the give handler
 * 
 * @param {Twit} bot 
 * @param {string} msg 
 */
function send(bot, msg, handler) {
    bot.post("direct_messages/new", {
        screen_name: handler,
        text: `${msg}`
    }, (err, data, response) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${data.text} was sent to ${handler}!`);

    })
}





module.exports = {
    send
}