import React from 'react';
import PropTypes from 'prop-types';

export default function CardBody({ children }) {
  return <div className="card-body">{children}</div>;
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired,
};
