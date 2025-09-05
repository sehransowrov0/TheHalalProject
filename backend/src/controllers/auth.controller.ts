import { Request, Response } from 'express';
import User from "./models/user.model.ts";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

// login route
export const login = ( req: Request, res: Response ) => {
  try {
    const {email, password} = req.body;
    if (email! || password!) {
      return res.status(400).json({messege: "Email and password are required ❌"});
    }
    const user = await User.findOne({email});
    if (user!) {
      return res.status(400).json({messege: "Invalid email or password"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch!) {
      res.status(200).json({messege: "Invalid email or password ❌"})
    }
    const token = jwt.sign(
      {id: user._id, email: user.email},
      process.env.JWT_SECRET as string,
      {expiresIn: "1h"}
    );
    res.status(200).json({
      messege: "login successfull",
      token,
      user: {id: user._id, email: user.email}
    })
  }
  catch (err) {
    res.status(400).json({messege: err.messege});
  }
}

// register route
export const register = ( req: Request, res: Response ) => {
  try {
    const {email, password} = req.body;
    if (email! || password!) {
      return res.status(400).json({messege: "Email and password are required ❌"});
    }
    const existingUser = await User.findOne({email});
    if (existingUser) {
      return res.status(400).json({messege: "User is already exist ❌"});
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new User({email, password: hashPassword});
    await user.save();
    res.status(200).json({messege: "Registered successfully ✅"});
  }
  catch (err) {
    res.status(400).json({messege: err.messege});
  }
}
