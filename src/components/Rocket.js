/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket, cancelReservation } from '../redux/rockets';

const Rocket = ({ rocket }) => {
  const {
    id, name, description, image, reserved
  } = rocket;
  const dispatch = useDispatch();

  return (
    <div className="rocket-row">
      <div className="rocket-img">
        <img src={image} alt={image} />
      </div>
      <div className="rocket-desc">
        <h3 className="title">{name}</h3>
        <div className="description">
          {reserved ? <span className="badge">Reserved</span> : ''}
          {description}
        </div>
        {reserved
          ? <button type="submit" className="cancel-btn" onClick={() => dispatch(cancelReservation({ id }))}>Cancel Reservation</button>
          : <button type="submit" className="btn" onClick={() => dispatch(reserveRocket({ id }))}>Reserve Rocket</button>}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    reserved: PropTypes.bool,
  }),
};

Rocket.defaultProps = {
  rocket: null,
};

export default Rocket;
