import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function PopularTagsCategory({ threads }) {
  const [tagActive, setTagActive] = useState(null);

  function onTagsHandler(index) {
    setTagActive(index);

    if (tagActive === index) {
      setTagActive(null);
    }
  }

  return (
    <div className="popular-tags-category">
      <h1>Kategori Populer</h1>
      <div className="category-tags">
        {threads.map((thread, index) => {
          console.log(thread.category);
          return (
            <span
              role="button"
              tabIndex={0}
              className={tagActive === index ? 'tags active' : 'tags'}
              key={thread.id}
              id={thread.id}
              onClick={() => onTagsHandler(index)}
            >
              {thread.category}
            </span>
          );
        })}
      </div>
    </div>
  );
}

PopularTagsCategory.propTypes = {
  threads: PropTypes.objectOf(PropTypes.string).isRequired,
};
