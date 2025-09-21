import Route from "../models/Route.js";

export const getAllRoutes = async (req, res) => {
  const routes = await Route.find();
  res.json(routes);
};

export const getRouteById = async (req, res) => {
  const route = await Route.findById(req.params.id);
  if (!route) return res.status(404).json({ message: "Route not found" });
  res.json(route);
};

export const createRoute = async (req, res) => {
  const route = new Route(req.body);
  await route.save();
  res.status(201).json(route);
};

export const updateRoute = async (req, res) => {
  const route = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(route);
};

export const deleteRoute = async (req, res) => {
  await Route.findByIdAndDelete(req.params.id);
  res.json({ message: "Route deleted" });
};
