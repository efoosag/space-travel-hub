/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import Rockets from './Rockets';

function RocketList({ rockets }) {
  console.log(rockets);
  return (
    <ul className="book-content">
      {rockets.map((rocket) => (
        <Rockets key={rocket.id} book={rocket} />
      ))}
    </ul>
  );
}

RocketList.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rocket_name: PropTypes.string,
      description: PropTypes.string,
      flickr_images: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default RocketList;
