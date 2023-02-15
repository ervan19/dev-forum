import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from '../ThreadItem/ThreadItem';

export default function ThreadList({ threads, upVote, downVote }) {
  return (
    <div className="discuss">
      <h1>Diskusi Tersedia</h1>
      <div className="cards-container">
        {threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            upVote={upVote}
            downVote={downVote}
          />
        ))}
      </div>
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};
