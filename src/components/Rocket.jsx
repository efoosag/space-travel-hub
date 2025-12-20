/* eslint-disable comma-dangle */
import React from "react";
import { useDispatch } from "react-redux";
import { reserveRocket, cancelReservation } from "../redux/rockets";

const Rocket = ({ rocket }) => {
  const { id, name, description, image, reserved } = rocket;
  console.log(rocket)
  const dispatch = useDispatch();

  return (
    <ul className="mb-6 md:flex justify-center">
    <li>
      <div className="flex flex-col sm:flex-row bg-white justify-center items-center sm:items-start gap-4 dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-sm">
        {/* Rocket Image */}
        <div className="rocket-img shrink-0 w-32 h-32 sm:w-40 sm:h-40">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>

        {/* Rocket Description */}
        <div className="rocket-desc flex-1 flex flex-col gap-3">
          <h3 className="title text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
            {name}
          </h3>

          <div className="description text-gray-700 dark:text-gray-300 text-sm sm:text-base">
            {reserved && (
              <span
                className="inline-block mb-1 rounded-full bg-green-100 px-2 py-1
                           text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-400"
              >
                Reserved
              </span>
            )}
            <p>{description}</p>
          </div>

          {/* Action Button */}
          {reserved ? (
            <button
              type="button"
              onClick={() => dispatch(cancelReservation({ id }))}
              className="mt-2 w-full sm:w-auto rounded-lg border border-red-500 px-4 py-2
                     text-sm sm:text-base font-medium text-red-600 hover:bg-red-50
                     dark:hover:bg-red-900/20 transition"
            >
              Cancel Reservation
            </button>
          ) : (
            <button
              type="button"
              onClick={() => dispatch(reserveRocket({ id }))}
              className="mt-2 w-full sm:w-auto rounded-lg border border-blue-600 px-4 py-2
                     text-sm sm:text-base font-medium text-blue-600 hover:bg-blue-50
                     dark:hover:bg-blue-900/20 transition"
            >
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </li>
    </ul>
  );
};


export default Rocket;
