import React, { useState } from 'react';
import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiThumbUp,
  HiThumbDown,
} from 'react-icons/hi';

export default function CommentCard() {
  const [like, setLike] = useState(false);
  const [unlike, setUnlike] = useState(false);

  function onLikeHandler() {
    setLike(!like);
  }
  function onUnlikeHandler() {
    setUnlike(!unlike);
  }

  return (
    <div className="comment">
      <div className="header">
        <div className="user">
          <img src="/avatar.png" alt="user" />
          <p>Hope Point</p>
        </div>
        <p>80 hari</p>
      </div>
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          quas at excepturi.
        </p>
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
          <p>4</p>
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
          <p>4</p>
        </div>
      </div>
    </div>
  );
}
