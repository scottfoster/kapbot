"use strict";

var api = require("twitch-api-v5");
var helpers = require("../helpers.js");

api.clientID = process.env.TWITCH_CLIENT_ID;

module.exports = function(app, event, callback) {
  api.streams.live(
    {
      limit: 10
    },
    (err, res) => {
      if (err) {
        return event(null, callback(helpers.strings("TWITCH_ERROR")));
      } else {
        var body = '';
        for (var i = 0; i < res.streams.length; i++) {
          body += (i+1) + '. ' + helpers.strings("GAME_STREAMER", res.streams[i]) + '\n';
        }
        return event(null, callback(body));
      }
    }
  );
};
