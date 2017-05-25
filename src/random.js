"use strict";

var api = require("twitch-api-v5");
var helpers = require("../helpers.js");

api.clientID = process.env.TWITCH_CLIENT_ID;

module.exports = function(app, event, callback) {
  api.streams.featured(
    {
      limit: 100
    },
    (err, res) => {
      if (err) {
        return event(null, callback(helpers.strings("TWITCH_ERROR")));
      } else {
        var random = Math.round(Math.random() * res.featured.length) + 1;
        var streamer = res.featured[random].stream;
        return event(null, callback(helpers.strings("VALID_STREAM", streamer)));
      }
    }
  );
};
