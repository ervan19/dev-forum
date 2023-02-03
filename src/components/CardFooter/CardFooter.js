import React, { useState } from 'react';
import {
  HiOutlineThumbUp,
  HiOutlineThumbDown,
  HiThumbUp,
  HiThumbDown,
} from 'react-icons/hi';
import { HiArrowUturnLeft } from 'react-icons/hi2';

export default function CardFooter() {
  const [like, setLike] = useState(false);
  const [unlike, setUnlike] = useState(false);

  function onLikeHandler() {
    setLike(!like);
  }
  function onUnlikeHandler() {
    setUnlike(!unlike);
  }
  return (
    <div className="card-footer">
      <div
        role="button"
        tabIndex={0}
        className="icons-btn like-thread"
        onClick={onLikeHandler}
      >
        {like ? (
          <HiThumbUp size={16} stroke="#13102D" />
        ) : (
          <HiOutlineThumbUp size={16} stroke="#13102D" />
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
          <HiThumbDown size={16} stroke="#13102D" />
        ) : (
          <HiOutlineThumbDown size={16} stroke="#13102D" />
        )}
        <p>4</p>
      </div>
      <div className="icons-btn reply-thread">
        <HiArrowUturnLeft size={16} fill="#828282" />
        <p>4</p>
      </div>
      <p className="time-thread">80 hari yang lalu</p>
    </div>
  );
}
