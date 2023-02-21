import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import { asyncCreateThread } from "../states/threads/action";

export default function CreateDisscussPage() {
  const [title, setTitle] = useInput("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useInput("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onBodyChangeHandler = (e) => {
    setBody(e.target.innerHTML);
  };

  function onSubmitNewThread(e) {
    e.preventDefault();
    dispatch(asyncCreateThread({ title, body, category }));
    navigate("/");
  }

  return (
    <div className="create-disscuss">
      <h1>Buat Diskusi Baru</h1>
      <form>
        <label htmlFor="title">
          Judul
          <input type="text" value={title} onChange={setTitle} />
        </label>
        <label htmlFor="category">
          Kategori
          <input type="text" value={category} onChange={setCategory} />
        </label>
        <div className="label">
          <p>Diskusi</p>
          <div
            className="comment-field-input"
            onInput={onBodyChangeHandler}
            contentEditable
            suppressContentEditableWarning
          />
        </div>
        <button type="submit" className="btn" onClick={onSubmitNewThread}>
          Buat Diskusi
        </button>
      </form>
    </div>
  );
}
