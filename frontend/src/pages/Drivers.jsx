import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/global.css';
import DriverCard from '../components/DriverCard.jsx';

const Drivers = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/drivers', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        });
        setDrivers(res.data);
      } catch (err) {
        console.error('Error fetching drivers', err);
      }
    };
    fetchDrivers();
  }, []);

  return (
    <div className="page-container">
      <h1>Drivers</h1>
      <div className="card-grid">
        {drivers.map(driver => <DriverCard key={driver._id} driver={driver} />)}
      </div>
    </div>
  );
};

export default Drivers;
