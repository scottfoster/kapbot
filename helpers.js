'use strict';

var moment = require("moment");
const formatNum = require("format-num");

function strings( short, data )
{
  switch ( short )
  {
    case 'TWITCH_ERROR':
      return 'Had a problem connecting to Twitch. Please make sure the *TWITCH_CLIENT_ID* in serverless.yml is valid or try again later.';
      break;

    case 'UNABLE_TO_LOCATION_USER':
      return 'Sorry, I could not find a Twitch user that goes by ' + '"' + data.currentIntent.slots.user + '."';
      break;

    case 'NO_VIDEOS_FOR_USER':
      return 'Sorry, couldn\'t find any videos for "' + data.currentIntent.slots.user + '."';
      break;

    case 'NOT_STREAMING_LINK':
      return "Sorry, " + data.channel.display_name + ' is currently not streaming. You can watch their last stream "' + data.title + '" at ' + data.url + ".";
      break;

    case 'VALID_STREAM':
      return data.channel.display_name + " is *live* and has been streaming for " + moment( data.created_at ).fromNow(true) + ". They are currently playing \"" + data.channel.game + "\" with " + formatNum( data.viewers ) + " viewers. Start watching them at " + data.channel.url + ".";
      break;

    case 'RANDOM_STREAM':
      console.log( data );
      return data.channel.display_name + " is live and has been streaming for " + moment( data.created_at ).fromNow(true);
      break;

    case 'GAME_STREAMER':
      return data.channel.name + ' is playing "' + data.channel.game + '" for ' + data.viewers + " people - " + data.channel.url;
      break;

    default:
      return "An unknown error has occurred.";
  }
}

module.exports = {
   strings
}
