import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    console.log("BODY:", req.body);

    const {
      nationalId,
      fullName,
      email,
      phone,
      birthDate,
      password,
    } = req.body;

    console.log("STEP 1");

    const existingUser = await User.findOne({
      email,
    });

    console.log("STEP 2");

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    console.log("STEP 3");

    console.log("DATA TO SAVE:", {
  nationalId,
  fullName,
  email,
  phone,
  birthDate,
  password,
});

    const user = await User.create({
      nationalId,
      fullName,
      email,
      phone,
      birthDate,
      password,
    });

    console.log("STEP 4");

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        fullName: user.fullName,
        email: user.email,
        phone: user.phone,
        nationalId: user.nationalId,
        birthDate: user.birthDate,
      },
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: error.message,
    });
  }
};