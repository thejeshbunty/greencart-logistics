import React from 'react';

const RouteCard = ({ route }) => {
  return (
    <div className="card">
      <h3>Route ID: {route.routeID}</h3>
      <p>Distance: {route.distanceKm} km</p>
      <p>Traffic: {route.trafficLevel}</p>
    </div>
  );
};

export default RouteCard;
