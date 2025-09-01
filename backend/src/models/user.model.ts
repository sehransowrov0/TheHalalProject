import {Schema, model, Model } from 'mongoose';
import type { IUser } from '../types/user.type.ts'


const userSchema = new Schema<IUser>({
  email: String,
  password: String
})

const User: Model<IUser> = model<IUser>("user", userSchema)

export default User
