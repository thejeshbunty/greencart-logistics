import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import '../styles/global.css';

const Dashboard = () => {
  const [kpis, setKpis] = useState(null);

  useEffect(() => {
    const fetchKpis = async () => {
      const res = await axios.post('http://localhost:5000/simulate', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setKpis(res.data);
    };
    fetchKpis();
  }, []);

  if (!kpis) return <p>Loading KPIs...</p>;

  const pieData = [
    { name: 'On-Time Deliveries', value: kpis.onTimeDeliveries },
    { name: 'Late Deliveries', value: kpis.lateDeliveries }
  ];

  const barData = [
    { name: 'Total Profit', value: kpis.totalProfit },
    { name: 'Efficiency Score', value: kpis.efficiencyScore },
    { name: 'Fuel Cost', value: kpis.fuelCost }
  ];

  const COLORS = ['#4CAF50', '#F44336'];

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="kpi-cards">
        <div className="card">
          <h3>Total Profit</h3>
          <p>${kpis.totalProfit}</p>
        </div>
        <div className="card">
          <h3>Efficiency Score</h3>
          <p>{kpis.efficiencyScore}</p>
        </div>
        <div className="card">
          <h3>Fuel Cost</h3>
          <p>${kpis.fuelCost}</p>
        </div>
      </div>

      <div className="charts">
        <div className="chart-card">
          <h3>Delivery Performance</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              <Cell fill={COLORS[0]} />
              <Cell fill={COLORS[1]} />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="chart-card">
          <h3>KPIs Overview</h3>
          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;