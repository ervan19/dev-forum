import React from 'react';
import { Link } from 'react-router-dom';
import { HiPlus } from 'react-icons/hi';
import PopularTagsCategory from '../PopularTagsCategory/PopularTagsCategory';

export default function HeroHome() {
  return (
    <div className="hero">
      <PopularTagsCategory />
      <Link to="/new" className="add-discuss-btn">
        Buat Diskusi Baru
        <HiPlus size={20} fill="white" />
      </Link>
    </div>
  );
}
