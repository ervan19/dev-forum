import React from 'react';
import DetailThread from '../components/DetailThread/DetailThread';
import CommentCard from '../components/CommentCard/CommentCard';

export default function DetailPage() {
  return (
    <div className="detail-container">
      <DetailThread />
      <div className="add-comment-container">
        <h3>Beri Komentar</h3>
        <form className="addComment">
          <textarea />
          <button type="submit">Kirim</button>
        </form>
      </div>
      <div className="comment-section">
        <h3>Komentar (2)</h3>
        <div className="comments">
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </div>
      </div>
    </div>
  );
}
