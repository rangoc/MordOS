import React, { useState, useEffect } from 'react';

// components
import Window from 'components/Window';
import Comment from './Comment';
// assets
import rssFeed from 'assets/rssFeed.svg';
import { appType } from 'constants/appType';

// sass
import './rssFeed.scss';
const RssFeed = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const fetchResponse = await fetch(
        'https://jsonplaceholder.typicode.com/comments/?_limit=30'
      );
      const response = await fetchResponse.json();
      setComments(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Window icon={rssFeed} code={appType.rssFeed}>
      <div className="rssFeed-wrapper">
        {comments.length > 0 ? (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        ) : (
          <p className="empty-directory">RSSFeed is empty</p>
        )}
      </div>
    </Window>
  );
};

export default RssFeed;
