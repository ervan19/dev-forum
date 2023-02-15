import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HiLogout } from 'react-icons/hi';
import BrandApp from '../BrandApp/BrandApp';

export default function Navigation({ authUser, logoutHandler }) {
  const { id, avatar, name } = authUser;
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
          <p>{name}</p>
          <img className="avatar-image" src={avatar} alt={id} />
        </div>
        <button type="button" className="logout-btn" onClick={logoutHandler}>
          Logout
          <HiLogout />
        </button>
      </div>
    </nav>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  logoutHandler: PropTypes.func.isRequired,
};
