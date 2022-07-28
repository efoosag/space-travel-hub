import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions';
import { getRockets } from '../redux/rockets';

const Profile = () => {
  const missionState = useSelector((state) => state.entities.missions);
  const rocketsState = useSelector((state) => state.entities.rockets);
  const missions = missionState.filter((mission) => mission.reserved !== false);
  const rockets = rocketsState.filter((rocket) => rocket.reserved !== false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    dispatch(getRockets());
  }, []);
  return (
    <section className="section">
      <div className="profile">
        <div className="profile-section">
          <h3 className="profile-title">My Missions</h3>
          <ul className="profile-list list">
            {missions.map((mission) => (
              <li className="list-item" key={mission.id}>
                {mission.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="profile-section">
          <h3 className="profile-title">My Rockets</h3>
          <ul className="profile-list list">
            {rockets.map((rocket) => (
              <li className="list-item" key={rocket.id}>
                {rocket.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
