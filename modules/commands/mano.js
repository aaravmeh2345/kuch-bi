const fs = require("fs");
module.exports.config = {
  name: "mano",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "MrTomXxX", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "man",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("+mano")==0 || event.body.indexOf("+Mano")==0 || event.body.indexOf("Mano")==0 || event.body.indexOf("mano")==0) {
    var msg = {
        body: "💝❤️❤️‍🔥 MANO ❤️‍🔥❤️💝",
        attachment: fs.createReadStream(__dirname + `/noprefix/mano.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
