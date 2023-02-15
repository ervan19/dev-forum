import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiThumbUp,
  HiThumbDown,
} from 'react-icons/hi';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import parser from 'html-react-parser';
import { postedAt } from '../../utils';

export default function ThreadItem({
  id,
  title,
  body,
  category,
  upVotesBy,
  downVotesBy,
  totalComments,
  authUser,
  user,
  upVote,
  downVote,
  createdAt,
}) {
  const isThreadUpVoted = upVotesBy.includes(authUser);
  const isThreadDownVoted = downVotesBy.includes(authUser);

  const onLikeHandler = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onUnlikeHandler = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-text">
          <p className="card-author">
            Dibuat oleh
            <span>{user.name}</span>
          </p>
          <Link to={`/detail/${id}`} className="card-title">
            {title}
          </Link>
          <p className="card-content">{parser(body)}</p>
        </div>
        <div className="card-tags">
          <p className="tags">{`#${category}`}</p>
        </div>
      </div>
      <div className="card-footer">
        <p className="icons-btn like-thread">
          <button type="button" tabIndex={0} onClick={onLikeHandler}>
            {isThreadUpVoted ? (
              <HiThumbUp size={16} stroke="#13102D" />
            ) : (
              <HiOutlineThumbUp size={16} stroke="#13102D" />
            )}
          </button>
          {upVotesBy.length}
        </p>
        <p className="icons-btn unlike-thread">
          <button type="button" tabIndex={0} onClick={onUnlikeHandler}>
            {isThreadDownVoted ? (
              <HiThumbDown size={16} stroke="#13102D" />
            ) : (
              <HiOutlineThumbDown size={16} stroke="#13102D" />
            )}
          </button>
          {downVotesBy.length}
        </p>
        <div className="icons-btn reply-thread">
          <HiArrowUturnLeft size={16} fill="#828282" />
          <p>{totalComments}</p>
        </div>
        <p className="time-thread">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  authUser: PropTypes.string.isRequired,
  user: PropTypes.shape(userShape).isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  upVote: PropTypes.func,
  downVote: PropTypes.func,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };
