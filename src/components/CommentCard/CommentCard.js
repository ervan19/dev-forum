import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiThumbUp,
  HiThumbDown,
} from "react-icons/hi";
import parser from "html-react-parser";
import { postedAt } from "../../utils";

export default function CommentCard({ comments, authUser }) {
  const [like, setLike] = useState(false);
  const [unlike, setUnlike] = useState(false);

  function onLikeHandler() {
    setLike(!like);
  }
  function onUnlikeHandler() {
    setUnlike(!unlike);
  }

  return (
    <>
      {comments.map((data) => (
        <div className="comment" key={data.id}>
          <div className="header">
            <div className="user-avatar">
              <img src={data.owner.avatar} alt={data.owner.name} />
              <p>{data.owner.name}</p>
            </div>
            <p>{postedAt(data.createdAt)}</p>
          </div>
          <div className="content">
            <p>{parser(data.content)}</p>
          </div>
          <div className="liked">
            <div
              role="button"
              tabIndex={0}
              className="icons-btn like-thread"
              onClick={onLikeHandler}
            >
              {like ? (
                <HiThumbUp size={20} stroke="#13102D" />
              ) : (
                <HiOutlineThumbUp size={20} stroke="#13102D" />
              )}
              <p>{data.upVotesBy.length}</p>
            </div>
            <div
              role="button"
              tabIndex={0}
              className="icons-btn like-thread"
              onClick={onUnlikeHandler}
            >
              {unlike ? (
                <HiThumbDown size={20} stroke="#13102D" />
              ) : (
                <HiOutlineThumbDown size={20} stroke="#13102D" />
              )}
              <p>{data.downVotesBy.length}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

const userShape = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentCard.propTypes = {
  ...commentShape,
  authUser: PropTypes.string.isRequired,
};
