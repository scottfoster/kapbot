"use strict";

var api = require("twitch-api-v5");
var helpers = require("../helpers.js");

api.clientID = process.env.TWITCH_CLIENT_ID;

module.exports = function(app, event, callback) {
  api.users.usersByName({ users: app.currentIntent.slots.user }, (err, res) => {
    if (err) {
      return event(null, callback(helpers.strings("TWITCH_ERROR")));
    } else {
      if (!res.users[0]) {
        return event(null, callback(helpers.strings("UNABLE_TO_LOCATION_USER", app)));
      }
      var user_id = res.users[0]._id;
      api.streams.live({ channel: user_id }, (err, res) => {
        var live = res.streams[0];
        if (!live) {
          api.channels.videos({ channelID: user_id }, (err, res) => {
            var last_video = res.videos[0];
            if (!last_video) {
              return event(null, callback(helpers.strings("NO_VIDEOS_FOR_USER", app)));
            } else {
              return event(null, callback(helpers.strings("NOT_STREAMING_LINK", last_video)));
            }
          });
        } else {
          return event(null, callback(helpers.strings("VALID_STREAM", live)));
        }
      });
    }
  });
};
