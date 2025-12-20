import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Rocket from "./Rocket";
import { getRockets } from "../redux/rockets";

const RocketList = () => {
  const rockets = useSelector((state) => state.entities.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <section className="section px-4 sm:px-6 lg:px-8 py-8">
      <div className="mx-auto max-w-5xl space-y-6">
        <ul className="flex flex-col gap-6">
          {rockets.map((rocket) => (
            <Rocket key={rocket.id} rocket={rocket} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RocketList;
