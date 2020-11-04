import React from 'react';

const BotfuelWebChat = (pluginOptions) => {
  if (
    pluginOptions.websiteId
  ) {
    return (
      <>
        <script
          key={`gatsby-plugin-botfuel-hermes-webchat-js`}
          src="https://cdn.jsdelivr.net/npm/botfuel-hermes-webchat-client"
        />
        <script
          key={`gatsby-plugin-botfuel-hermes-webchat`}
          dangerouslySetInnerHTML={{
            __html: `BotfuelWebChat.init({ websiteId: '${pluginOptions.websiteId}' });`,
          }}
        />
      </>
    );
  }
};

export default BotfuelWebChat;