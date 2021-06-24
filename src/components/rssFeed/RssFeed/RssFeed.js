import React from 'react';
// components
import Window from 'components/Window';
import Comment from '../Comment/Comment';
// assets./Comment/Comment
import rssFeed from 'assets/rssFeed.svg';
import { appType } from 'constants/appType';
// sass
import './rssFeed.scss';
import useFetch from 'hooks/useFetch';
const RssFeed = () => {
  const { isLoading, serverError, data } = useFetch(
    'https://jsonplaceholder.typicode.com/comments/?_limit=30'
  );
  return (
    <Window icon={rssFeed} code={appType.rssFeed}>
      <div className="rssFeed-wrapper">
        {!isLoading ? (
          data.map((comment) => <Comment key={comment.id} comment={comment} />)
        ) : serverError ? (
          <p className="empty-directory">{serverError}</p>
        ) : (
          <p className="empty-directory">RSSFeed is empty</p>
        )}
      </div>
    </Window>
  );
};

export default RssFeed;
