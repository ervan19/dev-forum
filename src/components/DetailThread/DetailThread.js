import React from "react";
import PropTypes from "prop-types";
import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiThumbUp,
  HiThumbDown,
} from "react-icons/hi";
import { HiArrowUturnLeft } from "react-icons/hi2";
import parser from "html-react-parser";
import { postedAt } from "../../utils";

export default function DetailThread({
  authUser,
  upVote,
  downVote,
  id,
  title,
  category,
  body,
  owner,
  comments,
  createdAt,
  upVotesBy,
  downVotesBy,
}) {
  const isThreadUpVoted = upVotesBy.includes(authUser);
  const isThreadDownVoted = downVotesBy.includes(authUser);

  return (
    <div className="details">
      <div className="card-text">
        <div className="card-detail-author">
          <img src={owner.avatar} alt={owner.name} />
          <p>{owner.name}</p>
        </div>
        <h3 className="card-title">{title}</h3>
        <p className="card-content">{parser(body)}</p>
      </div>
      <div className="card-tags">
        <p className="tags">{`#${category}`}</p>
      </div>
      <div className="card-footer">
        <p className="icons-btn like-thread">
          <button type="button" tabIndex={0} onClick={() => upVote(id)}>
            {isThreadUpVoted ? (
              <HiThumbUp size={16} stroke="#13102D" />
            ) : (
              <HiOutlineThumbUp size={16} stroke="#13102D" />
            )}
          </button>
          {upVotesBy.length}
        </p>
        <p className="icons-btn unlike-thread">
          <button type="button" tabIndex={0} onClick={() => downVote(id)}>
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
          <p>{comments.length}</p>
        </div>
        <p className="time-thread">{postedAt(createdAt)}</p>
      </div>
    </div>
  );
}

const ownerShape = {
  name: PropTypes.string.isRequired,
};

DetailThread.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};
