"use strict";

var api = require("twitch-api-v5");
var helpers = require("../helpers.js");

api.clientID = process.env.TWITCH_CLIENT_ID;

module.exports = function(app, event, callback) {
  api.search.streams(
    {
      query: app.currentIntent.slots.streamgame
    },
    (err, res) => {
      if (err) {
        return event(null, callback(helpers.strings("TWITCH_ERROR")));
      } else {
        var body = '';
        for (var i = 0; i < res.streams.length; i++) {
          body += helpers.strings("GAME_STREAMER", res.streams[i]) + "\n\n";
        }
        return event(null, callback(body));
      }
    }
  );
};
