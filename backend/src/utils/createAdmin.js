import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import User from "../models/User.js"; // <-- correct relative path

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    
    const hashedPassword = await bcrypt.hash("password123@", 10);

    const adminExists = await User.findOne({ username: "admin" });
    if (adminExists) {
      console.log("Admin already exists");
      return process.exit();
    }

    const admin = new User({
      username: "admin",
      password: hashedPassword,
    });

    await admin.save();
    console.log("Admin user created");
    mongoose.disconnect();
  } catch (err) {
    console.error("Error creating admin:", err);
  }
};

createAdmin();
