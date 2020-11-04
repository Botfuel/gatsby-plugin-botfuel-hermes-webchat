const { default: BotfuelWebChat } = require("./src/BotfuelWebChat");

function plugin({ setPostBodyComponents }, pluginOptions = {}) {
  const botfuelWebchat = new BotfuelWebChat(pluginOptions);

  setPostBodyComponents([
    botfuelWebchat,
  ]);
}

exports.onRenderBody = plugin;