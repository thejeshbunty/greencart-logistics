import mongoose from "mongoose";

const routeSchema = new mongoose.Schema({
  routeID: Number,
  distanceKm: Number,
  trafficLevel: String,
  baseTime: String
});

export default mongoose.models.Route || mongoose.model("Route", routeSchema);
