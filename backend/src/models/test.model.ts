import { Schema, Model, model } from "mongoose";
import type { Itest } from "../types/test.type.js";


const testSchema = new Schema<Itest>({
  msg: { type: String, required: true }
});

const Test: Model<Itest> = model<Itest>("test", testSchema);
export default Test
