import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DetailThread from '../components/DetailThread/DetailThread';
import CommentCard from '../components/CommentCard/CommentCard';
import {
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
} from '../states/threadDetail/action';

export default function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  if (!threadDetail) {
    return null;
  }

  const onUpVoteThread = () => {
    dispatch(asyncToggleUpVoteThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownVoteThreadDetail());
  };

  return (
    <div className="detail-container">
      <DetailThread
        {...threadDetail}
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        authUser={authUser.id}
      />
      <div className="add-comment-container">
        <h3>Beri Komentar</h3>
        <form className="addComment">
          <textarea />
          <button type="submit" className="btn">
            Kirim
          </button>
        </form>
      </div>
      <div className="comment-section">
        <h3>Komentar (2)</h3>
        <div className="comments">
          <CommentCard {...threadDetail} />
        </div>
      </div>
    </div>
  );
}
