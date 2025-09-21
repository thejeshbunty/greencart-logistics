import Driver from "../models/Driver.js";

export const getAllDrivers = async (req, res) => {
  const drivers = await Driver.find();
  res.json(drivers);
};

export const getDriverById = async (req, res) => {
  const driver = await Driver.findById(req.params.id);
  if (!driver) return res.status(404).json({ message: "Driver not found" });
  res.json(driver);
};

export const createDriver = async (req, res) => {
  const driver = new Driver(req.body);
  await driver.save();
  res.status(201).json(driver);
};

export const updateDriver = async (req, res) => {
  const driver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(driver);
};

export const deleteDriver = async (req, res) => {
  await Driver.findByIdAndDelete(req.params.id);
  res.json({ message: "Driver deleted" });
};
