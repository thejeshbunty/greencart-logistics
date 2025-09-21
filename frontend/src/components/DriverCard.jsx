import React from 'react';

const DriverCard = ({ driver }) => {
  return (
    <div className="card">
      <h3>{driver.name}</h3>
      <p>Current Shift Hours: {driver.currentShiftHours}</p>
      <p>Past 7 Days Hours: {driver.past7DaysHours.join(', ')}</p>
    </div>
  );
};

export default DriverCard;
