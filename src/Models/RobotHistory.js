import { Schema, model } from "mongoose";

const robotSchema = Schema(
  {
    name: { type: String, required: true },
    date: { type: Date, default: Date.now },
    mapName: { type: String },
    image: { type: String },
    timeTaken: { type: Number },
    percentCompleted: { type: Number },
    status: { type: String },
  },
  {
    timestamps: true,
  }
);

const Robot = model("Robot", robotSchema);
export default Robot;
