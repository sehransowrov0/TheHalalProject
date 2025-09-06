import type { Request, Response } from 'express';
import User from "../models/user.model.ts";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'

// login route
export const login = async ( req: Request, res: Response ) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({message: "Email and password are required ❌"});
    }
    const user = await User.findOne({email});
    if (!user) {
      return res.status(400).json({message: "Invalid email or password"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(200).json({message: "Invalid email or password ❌"})
    }
    const token = jwt.sign(
      {id: user._id, email: user.email},
      process.env.JWT_SECRET as string,
      {expiresIn: "1h"}
    );
    res.status(200).json({
      message: "login successfull ✅",
      token,
      user: {id: user._id, email: user.email}
    })
  }
  catch (err) {
    res.status(400).json({message: err.message});
  }
}

// register route
export const register = async ( req: Request, res: Response ) => {
  try {
    const {email, password} = req.body;
    if (!email || !password) {
      return res.status(400).json({message: "Email and password are required ❌"});
    }
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: "User already exist ❌"});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({email, password: hashedPassword});
    await user.save();
    res.status(201).json({message: "Registered successfully ✅"});
  }
  catch (err) {
    res.status(400).json({message: err.message});
    console.error("❌ Registration error:", err);
  }
}

// profile route 
export const profile = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.user._id).select("-password")
    if (!user) {
      res.status(404).json({ messege: "User not found ❌"})
    }
    res.status(200).json({ user })
  }
  catch (err) {
    res.status(400).json({ messege: err.messege })
  }
}

















