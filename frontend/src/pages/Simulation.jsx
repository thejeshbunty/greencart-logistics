import React, { useEffect, useState } from "react";  
import { getDrivers, getRoutes, getOrders, runSimulation } from "../services/api";  
import "../styles/global.css";  

const Simulation = () => {  
  const [orders, setOrders] = useState([]);  
  const [routes, setRoutes] = useState([]);  
  const [drivers, setDrivers] = useState([]);  
  const [kpis, setKpis] = useState({  
    totalProfit: 0,  
    efficiencyScore: 0,  
    onTimeDeliveries: 0,  
    lateDeliveries: 0,  
    fuelCost: 0,  
  });  

  // Fetch data on load  
  useEffect(() => {  
    const fetchData = async () => {  
      try {  
        const ordersRes = await getOrders();  
        const routesRes = await getRoutes();  
        const driversRes = await getDrivers();  

        setOrders(ordersRes.data);  
        setRoutes(routesRes.data);  
        setDrivers(driversRes.data);  
      } catch (err) {  
        console.error("Error fetching data:", err);  
      }  
    };  
    fetchData();  
  }, []);  

  // Dummy calculation (not applying any rules)
  const calculateKPIs = () => {  
    let totalProfit = orders.reduce((acc, o) => acc + o.valueRs, 0);  
    let onTime = Math.floor(orders.length * 0.8);  
    let late = orders.length - onTime;  
    let fuelCost = orders.length * 10;  

    setKpis({  
      totalProfit,  
      efficiencyScore: Math.round((onTime / orders.length) * 100),  
      onTimeDeliveries: onTime,  
      lateDeliveries: late,  
      fuelCost,  
    });  
  };  

  return (  
    <div className="page-container">  
      <h1>Simulation</h1>  
      <button className="btn btn-primary" onClick={calculateKPIs}>Run Simulation</button>  

      <div className="simulation-results">  
        <h3>KPIs</h3>  
        <p>Total Profit: ₹{kpis.totalProfit}</p>  
        <p>Efficiency Score: {kpis.efficiencyScore}%</p>  
        <p>On-time Deliveries: {kpis.onTimeDeliveries}</p>  
        <p>Late Deliveries: {kpis.lateDeliveries}</p>  
        <p>Fuel Cost: ₹{kpis.fuelCost}</p>  
      </div>  
    </div>  
  );  
};  

export default Simulation;