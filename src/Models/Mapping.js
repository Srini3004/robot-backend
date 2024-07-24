import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mapDataSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      index: true,
    },
     
    mode: { type: String, required: true },
    feedback: { type: String, required: true },
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
    current_position: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
      z: { type: Number, required: true },
    },
    current_orientation: {
      x: { type: Number, required: true },
      y: { type: Number, required: true },
      z: { type: Number, required: true },
      w: { type: Number, required: true },
    },
    map_image: { type: String, required: true },
    map_name: { type: String, required: true },
    completion_command: { type: String, required: true },
  },
  { timestamps: true }
);

const MapData = mongoose.model("MapData", mapDataSchema);
export default MapData;