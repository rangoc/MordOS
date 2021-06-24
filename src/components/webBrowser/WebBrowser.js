import React, { useState } from 'react';
// components
import Window from 'components/Window';
// constants
import { appType } from 'constants/appType';
// assets
import webBrowser from 'assets/webBrowser.svg';
// sass
import './webBrowser.scss';
const WebBrowser = () => {
  const [url, setUrl] = useState({ currentUrl: '', finalUrl: '' });
  const { currentUrl, finalUrl } = url;
  const handleChangeUrl = (e) => {
    setUrl({ ...url, currentUrl: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = currentUrl.replace(/^http:\/\//, '');
    url = url.replace(/^https:\/\//, '');
    url = 'https://' + url;

    setUrl({ currentUrl, finalUrl: url });
  };
  return (
    <Window icon={webBrowser} code={appType.webBrowser}>
      <form onSubmit={handleSubmit} className="url-form">
        <button className="search-button" type="submit">
          Search
        </button>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Type a URL"
            onChange={handleChangeUrl}
          />
        </div>
      </form>
      <div className="website">
        <iframe
          className="website-iframe"
          src={finalUrl}
          title={finalUrl}
        ></iframe>
      </div>
    </Window>
  );
};

export default WebBrowser;
