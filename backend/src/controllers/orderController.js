import Order from "../models/Order.js";

export const getAllOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};

export const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ message: "Order not found" });
  res.json(order);
};

export const createOrder = async (req, res) => {
  const order = new Order(req.body);
  await order.save();
  res.status(201).json(order);
};

export const updateOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(order);
};

export const deleteOrder = async (req, res) => {
  await Order.findByIdAndDelete(req.params.id);
  res.json({ message: "Order deleted" });
};
