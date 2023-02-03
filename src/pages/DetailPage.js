import React from 'react';
import Details from '../components/Details/Details';

export default function DetailPage() {
  return (
    <div className="detail-container">
      <Details />
      <div className="add-comment-container">
        <h3>Beri Komentar</h3>
        <form className="addComment">
          <textarea />
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
}
