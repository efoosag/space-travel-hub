import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Mission from "./Mission";
import { getMissions } from "../redux/missions";

const MissionList = () => {
  const missions = useSelector((state) => state.entities.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <section className="section px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-7xl overflow-x-auto">
        <table className="w-full table-auto border-collapse text-left">
          {/* Table Header */}
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-3 py-3 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                Mission
              </th>
              <th className="px-3 py-3 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300">
                Description
              </th>
              <th className="px-3 py-3 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 text-center">
                Status
              </th>
              <th className="px-3 py-3 text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 text-center">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {missions.map((mission) => (
              <Mission key={mission.id} mission={mission} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MissionList;
