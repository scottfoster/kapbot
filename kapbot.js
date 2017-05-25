"use strict";

function response(data) {
  return {
    dialogAction: {
      type: "Close",
      fulfillmentState: "Fulfilled",
      message: {
        contentType: "PlainText",
        content: data
      }
    }
  };
}

module.exports.game = (event, context, callback) => {
  require("./src/game.js")(event, callback, response);
};

module.exports.live = (event, context, callback) => {
  require("./src/live.js")(event, callback, response);
};

module.exports.random = (event, context, callback) => {
  require("./src/random.js")(event, callback, response);
};

module.exports.popular = (event, context, callback) => {
  require("./src/popular.js")(event, callback, response);
};
