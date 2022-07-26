import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../redux/rockets';

const RocketList = () => {
  const rockets = useSelector((state) => state.entities.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  });
  return (
    <section className="section">
      <ul className="list">
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <Rocket rocket={rocket} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RocketList;
