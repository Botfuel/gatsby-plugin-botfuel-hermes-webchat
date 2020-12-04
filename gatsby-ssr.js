const { default: BotfuelWebChat } = require("./src/BotfuelWebChat");

function plugin({ setPostBodyComponents }, pluginOptions = {}) {
  const botfuelWebchat = BotfuelWebChat(pluginOptions);

  setPostBodyComponents([
    botfuelWebchat,
  ]);
}

exports.onRenderBody = plugin;
