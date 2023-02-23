import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DetailThread from "../components/DetailThread/DetailThread";
import CommentCard from "../components/CommentCard/CommentCard";
import {
  asyncReceiveThreadDetail,
  asyncToggleUpVoteThreadDetail,
  asyncToggleDownVoteThreadDetail,
  asyncCreateComment,
} from "../states/threadDetail/action";
import FormComment from "../components/FormComment/FormComment";
// import { asyncCreateComment } from "../states/comment/action";

export default function DetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onUpVoteThread = () => {
    dispatch(asyncToggleUpVoteThreadDetail());
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownVoteThreadDetail());
  };

  const onSetContentHandler = (e) => {
    setContent(e.target.innerHTML);
  };

  const onPostComment = (e) => {
    e.preventDefault();
    dispatch(asyncCreateComment({ id, content }));
    setContent("");
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <div className="detail-container">
      <DetailThread
        authUser={authUser.id}
        upVote={onUpVoteThread}
        downVote={onDownVoteThread}
        {...threadDetail}
      />
      <div className="add-comment-container">
        <h3>Beri Komentar</h3>
        <FormComment
          setInput={onSetContentHandler}
          postHandler={onPostComment}
        />
      </div>
      <div className="comment-section">
        <h3>
          Komentar
          <span className="comment-length">
            ({threadDetail.comments.length ? threadDetail.comments.length : "0"}
            )
          </span>
        </h3>
        {threadDetail.comments.length ? (
          <div className="comments">
            <CommentCard authUser={authUser.id} {...threadDetail} />
          </div>
        ) : (
          <p className="not-comment">Tidak ada komentar</p>
        )}
      </div>
    </div>
  );
}
