import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMissions } from "../redux/missions";
import { getRockets } from "../redux/rockets";

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
    <section className="section px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
        {/* My Missions */}
        <div className="profile-section bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
          <h3 className="profile-title text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
            My Missions
          </h3>
          <ul className="profile-list list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {missions.length > 0 ? (
              missions.map((mission) => (
                <li key={mission.id} className="text-sm sm:text-base">
                  {mission.name}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                There are no reserved missions
              </p>
            )}
          </ul>
        </div>

        {/* My Rockets */}
        <div className="profile-section bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm">
          <h3 className="profile-title text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
            My Rockets
          </h3>
          <ul className="profile-list list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {rockets.length > 0 ? (
              rockets.map((rocket) => (
                <li key={rocket.id} className="text-sm sm:text-base">
                  {rocket.name}
                </li>
              ))
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                There are no reserved rockets
              </p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Profile;
