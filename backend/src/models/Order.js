import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderID: Number,
  valueRs: Number,
  assignedRoute: Number,
  deliveryTimestamp: String
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
