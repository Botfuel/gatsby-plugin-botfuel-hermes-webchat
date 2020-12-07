import React from 'react';

const BotfuelWebChat = ({ websiteId, ...otherSettings }) => {
  if (websiteId) {
    return (
      <>
        {Object.keys(otherSettings).length > 0 && (
          <script
            key="gatsby-plugin-botfuel-hermes-webchat-settings"
            dangerouslySetInnerHTML={{
              __html: `window.botfuelSettings = ${JSON.stringify(otherSettings)};`
            }}
          />
        )}
        <script
          key="gatsby-plugin-botfuel-hermes-webchat-widget"
          dangerouslySetInnerHTML={{
            __html: `(function(){var id="${websiteId}",w=window,d=document;try{w.botfuelSettings.websiteId=id}catch(e){w.botfuelSettings={websiteId:id}}function l(){var s=d.createElement("script");s.type="text/javascript";s.async=!0;s.src="https://d1qsqz7hmkju8m.cloudfront.net/index.js";var t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t)}if(void 0===w.Botfuel){w.botfuelEventsQueue=[];w.Botfuel={track:w.botfuelEventsQueue.push};if(w.attachEvent){w.attachEvent("onload",l)}else{w.addEventListener("load",l,!1)}}})();`,
          }}
        />
      </>
    );
  }
};

export default BotfuelWebChat;
