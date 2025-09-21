import Driver from "../models/Driver.js";
import Order from "../models/Order.js";
import Route from "../models/Route.js";

export const simulate = async (req, res) => {
const { numberOfDrivers, startTime, maxHoursPerDay } = req.body;

try {
const drivers = await Driver.find().limit(numberOfDrivers);
const orders = await Order.find();
const routes = await Route.find();

// Example KPIs calculation  
const totalProfit = orders.reduce((acc, o) => acc + o.valueRs, 0);  
const efficiencyScore = (drivers.length / orders.length) * 100;  
const onTime = orders.length * 0.8; // dummy  
const late = orders.length - onTime;  
const fuelCost = orders.length * 10; // dummy  

res.json({  
  totalProfit,  
  efficiencyScore,  
  onTimeDeliveries: onTime,  
  lateDeliveries: late,  
  fuelCost  
});

} catch (err) {
res.status(500).json({ message: err.message });
}
};
