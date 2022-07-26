import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getRockets } from '../redux/rockets/rockets';
import Rockets from './Rockets';

function Container() {
  const rockets = useSelector((state) => state.rockets, shallowEqual);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  return (
    <div>
      <Rockets rockets={rockets} />
    </div>
  );
}
export default Container;
