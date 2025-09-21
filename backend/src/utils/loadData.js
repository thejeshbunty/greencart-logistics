import fs from "fs";
import csv from "csv-parser";
import Driver from "../models/Driver.js";
import Route from "../models/Route.js";
import Order from "../models/Order.js";

export const loadDrivers = async () => {
  const drivers = [];
  fs.createReadStream("data/drivers.csv")
    .pipe(csv())
    .on("data", (row) => {
      drivers.push({
        name: row.name,
        currentShiftHours: parseInt(row.shift_hours),
        past7DaysHours: row.past_week_hours.split("|").map(Number)
      });
    })
    .on("end", async () => {
      await Driver.deleteMany({});
      await Driver.insertMany(drivers);
      console.log("Drivers loaded");
    });
};

export const loadRoutes = async () => {
  const routes = [];
  fs.createReadStream("data/routes.csv")
    .pipe(csv())
    .on("data", (row) => {
      routes.push({
        routeID: parseInt(row.route_id),
        distanceKm: parseFloat(row.distance_km),
        trafficLevel: row.traffic_level,
        baseTime: row.base_time
      });
    })
    .on("end", async () => {
      await Route.deleteMany({});
      await Route.insertMany(routes);
      console.log("Routes loaded");
    });
};

export const loadOrders = async () => {
  const orders = [];
  fs.createReadStream("data/orders.csv")
    .pipe(csv())
    .on("data", (row) => {
      orders.push({
        orderID: parseInt(row.order_id),
        valueRs: parseFloat(row.value_rs),
        assignedRoute: parseInt(row.route_id),
        deliveryTimestamp: row.delivery_time
      });
    })
    .on("end", async () => {
      await Order.deleteMany({});
      await Order.insertMany(orders);
      console.log("Orders loaded");
    });
};
