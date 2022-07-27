/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions';
import '../App.css';

const Mission = ({ mission }) => {
  const { id, name, description, joined } = mission;

  const dispatch = useDispatch();

  return (
    <>
      <td className="centerAlign">{name}</td>
      <td className="description">{description}</td>
      <td className="centerAlign">
        <span>
          {joined ? (
            <span className="badge-leave">NOT A MEMBER</span>
          ) : (
            <span className="badge-join">ACTIVE MEMBER</span>
          )}
        </span>
      </td>
      <td className="centerAlign">
        {joined ? (
          <button
            type="submit"
            className="btn-join"
            onClick={() => dispatch(joinMission({ id }))}
          >
            JOIN MISSION
          </button>
        ) : (
          <button
            type="submit"
            className="btn-leave"
            onClick={() => dispatch(leaveMission({ id }))}
          >
            LEAVE MISSION
          </button>
        )}
      </td>
    </>
  );
};

Mission.propTypes = {
  mission: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    joined: PropTypes.bool,
  }),
};

Mission.defaultProps = {
  mission: null,
};

export default Mission;
