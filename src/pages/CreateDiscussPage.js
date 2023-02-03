import React from 'react';

export default function CreateDisscussPage() {
  function onSubmitNewThread(e) {
    e.preventDefault();

    window.open('/');
  }
  return (
    <div className="create-disscuss">
      <h1>Buat Diskusi Baru</h1>
      <form>
        <label htmlFor="title">
          Judul
          <input type="text" />
        </label>
        <label htmlFor="category">
          Kategori
          <input type="text" />
        </label>
        <label htmlFor="Disscuss">
          Diskusi
          <textarea name="dicuss" id="" />
        </label>
        <button type="submit" onClick={onSubmitNewThread}>
          Buat Diskusi
        </button>
      </form>
    </div>
  );
}
