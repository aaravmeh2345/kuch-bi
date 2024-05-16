const fs = require("fs");
module.exports.config = {
  name: "rimsha",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "MrTomXxX", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "rimsha",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("+rimsha")==0 || event.body.indexOf("Rimsha")==0 || event.body.indexOf("rimsha")==0 || event.body.indexOf("Rimsha")==0) {
    var msg = {
        body: "💝❤️❤️‍🔥 RIMSHA ❤️‍🔥❤️💝",
        attachment: fs.createReadStream(__dirname + `/noprefix/Rimsha.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😍", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
