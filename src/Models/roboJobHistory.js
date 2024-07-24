import mongoose from "mongoose";

const Schema = mongoose.Schema;

const jobHistorySchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      index: true,
      required: true
    },
    mapName: { type: String, required: true },
    mapImage: { type: String, required: true },
    date: { type: Date, default: Date.now },
    timeTaken: { type: String, required: true }, 
    percentageCompleted: { type: Number, required: true },
    status: { type: String, required: true }, 
    mapId: { type: Schema.Types.ObjectId, ref: 'MapData', required: true }  
  },
  { timestamps: true }
);

const JobHistory = mongoose.model("JobHistory", jobHistorySchema);
export default JobHistory;