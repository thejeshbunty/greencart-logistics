import React, { useEffect, useState } from 'react';
import RouteCard from '../components/RouteCard.jsx';
import api from '../services/api.js';

const RoutesPage = () => {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await api.get('/routes');
        setRoutes(res.data);
      } catch (err) {
        console.error('Error fetching routes', err);
      }
    };
    fetchRoutes();
  }, []);

  return (
    <div className="page-container">
      <h1>Routes</h1>
      <div className="card-grid">
        {routes.map((route) => (
          <RouteCard key={route._id} route={route} />
        ))}
      </div>
    </div>
  );
};

export default RoutesPage;
