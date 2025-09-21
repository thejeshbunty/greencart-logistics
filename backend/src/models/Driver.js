import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
  name: String,
  currentShiftHours: Number,
  past7DaysHours: [Number]
});

export default mongoose.models.Driver || mongoose.model("Driver", driverSchema);
