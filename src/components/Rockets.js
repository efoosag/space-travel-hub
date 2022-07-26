/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';

function Rockets({ rockets }) {
  return (
    <div>
      <div>{rockets.flickr_images}</div>
      <div>
        <h3>{rockets.name}</h3>

        <p>
          <span>Reserved</span>
          {rockets.description}
        </p>
        <button type="button">Reserve Rocket</button>
        <button type="button">Cancel Reservation</button>
      </div>
    </div>
  );
}

Rockets.propTypes = {
  rockets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      rocket_name: PropTypes.string,
      description: PropTypes.string,
      flickr_images: PropTypes.string,
    }).isRequired
  ).isRequired,
};
export default Rockets;
