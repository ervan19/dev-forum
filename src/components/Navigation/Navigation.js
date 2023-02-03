import React from 'react';
import { Link } from 'react-router-dom';
import { HiLogout } from 'react-icons/hi';
import BrandApp from '../BrandApp/BrandApp';

export default function Navigation() {
  return (
    <nav>
      <div className="navigation-left">
        <BrandApp />
        <div className="navigation-link">
          <Link to="/">Thread</Link>
          <Link to="/leaderboards">Leaderboards</Link>
        </div>
      </div>
      <div className="navigation-right">
        <div className="avatar">
          <p>Hope Point</p>
          <img src="/avatar.png" alt="" />
        </div>
        <Link to="/" className="logout-btn">
          Logout
          <HiLogout />
        </Link>
      </div>
    </nav>
  );
}
