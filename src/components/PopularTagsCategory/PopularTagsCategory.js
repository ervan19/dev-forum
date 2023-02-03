import React from 'react';

export default function PopularTagsCategory() {
  const tags = [
    {
      id: 1,
      name: '#react',
    },
    {
      id: 2,
      name: '#introduction',
    },
    {
      id: 3,
      name: '#redux',
    },
  ];

  return (
    <div className="popular-tags-category">
      <h1>Kategori Populer</h1>
      <div className="category-tags">
        {tags.map((tag) => (
          <span role="button" tabIndex={0} className="tags" key={tag.id}>
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  );
}
