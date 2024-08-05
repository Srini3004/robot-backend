import { Schema, model } from "mongoose";

const historySchema = Schema({
  robotName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  mapName: { type: String, required: true },
  image: { type: String, required: true },
  timeTaken: { type: Number, required: true },
  percentCompleted: { type: Number, required: true },
  status: { type: String, required: true },
  linear_velocity: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
  },
  angular_velocity: {
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
  },
  position: { type: Object, required: true },
  orientation: { type: Object, required: true },
});

const History = model("History", historySchema);
export default History;
