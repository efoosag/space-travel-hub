/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import React from "react";
import { useDispatch } from "react-redux";
import { joinMission, leaveMission } from "../redux/missions";

const Mission = ({ mission }) => {
  const { id, name, description, reserved } = mission;

  const dispatch = useDispatch();

  return (
    <tr className="border-b last:border-none dark:border-gray-700">
      {/* Mission Name */}
      <td
        className="px-3 py-4 text-center text-sm sm:text-base font-medium
                 text-gray-900 dark:text-white"
      >
        {name}
      </td>

      {/* Description */}
      <td
        className="px-3 py-4 text-sm text-gray-600 dark:text-gray-300
                 max-w-xs sm:max-w-md lg:max-w-xl wrap-break"
      >
        {description}
      </td>

      {/* Status */}
      <td className="px-3 py-4 text-center">
        {reserved ? (
          <span
            className="inline-block rounded-full bg-green-100 px-3 py-1
                       text-xs sm:text-sm font-semibold text-green-700
                       dark:bg-green-900/30 dark:text-green-400"
          >
            ACTIVE MEMBER
          </span>
        ) : (
          <span
            className="inline-block rounded-full bg-gray-200 px-3 py-1
                       text-xs sm:text-sm font-semibold text-gray-700
                       dark:bg-gray-800 dark:text-gray-300"
          >
            NOT A MEMBER
          </span>
        )}
      </td>

      {/* Action */}
      <td className="px-3 py-4 text-center">
        {reserved ? (
          <button
            type="button"
            onClick={() => dispatch(leaveMission({ id }))}
            className="rounded-lg border border-red-500 px-4 py-2
                   text-xs sm:text-sm font-medium text-red-600
                   hover:bg-red-50 transition
                   dark:hover:bg-red-900/20"
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            onClick={() => dispatch(joinMission({ id }))}
            className="rounded-lg border border-blue-600 px-4 py-2
                   text-xs sm:text-sm font-medium text-blue-600
                   hover:bg-blue-50 transition
                   dark:hover:bg-blue-900/20"
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

export default Mission;
