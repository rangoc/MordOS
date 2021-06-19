import React from 'react';
// assets
import rssFeed from 'assets/rssFeed.svg';

// sass
import './rssFeed.scss';
const RssFeed = () => {
  return (
    <div className="rssFeed">
      <div className="iconWrapper">
        <img src={rssFeed} alt="Rss Feed" />
      </div>
    </div>
  );
};

export default RssFeed;
