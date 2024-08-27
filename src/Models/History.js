//--------------------------------------------------- Single Move Navigate  Value Store ----------------------------------------------



// import { Schema, model } from "mongoose";

// const historySchema = Schema({
//   robotName: { type: String, required: true },
//   date: { type: Date, default: Date.now },
//   mapName: { type: String, required: true },
//   image: { type: String, required: true },
//   timeTaken: { type: Number, required: true },
//   percentCompleted: { type: Number, required: true },
//   status: { type: String, required: true },
//   linear_velocity: {
//     x: { type: Number, required: true },
//     y: { type: Number, required: true },
//     z: { type: Number, required: true },
//   },
//   angular_velocity: {
//     x: { type: Number, required: true },
//     y: { type: Number, required: true },
//     z: { type: Number, required: true },
//   },
//   position: { type: Object, required: true },
//   orientation: { type: Object, required: true },
// });

// const History = model("History", historySchema);
// export default History;







//-------------------------------------Linear And Angular Same list  ----------------------------------------------------

// import { Schema, model } from "mongoose";

// const velocitySchema = new Schema({
//   linear: {
//     x: { type: Number, required: true },
//     y: { type: Number, required: true },
//     z: { type: Number, required: true },
//   },
//   angular: {
//     x: { type: Number, required: true },
//     y: { type: Number, required: true },
//     z: { type: Number, required: true },
//   },
// }, { _id: false });

// const historySchema = new Schema({
//   robotName: { type: String, required: true },
//   date: { type: Date, default: Date.now },
//   mapName: { type: String, required: true },
//   image: { type: String, required: true },
//   timeTaken: { type: Number, required: true },
//   percentCompleted: { type: Number, required: true },
//   status: { type: String, required: true },
//   velocities: [velocitySchema], // Storing velocities as a list
//   position: { type: Object, required: true },
//   orientation: { type: Object, required: true },
// });

// const History = model("History", historySchema);
// export default History;







//------------------------------------------------- List in Linear   And Angular----------------------------------------------------



// import { Schema, model } from "mongoose";

// const velocitySchema = new Schema({
//   x: { type: Number, required: true },
//   y: { type: Number, required: true },
//   z: { type: Number, required: true },
// }, { _id: false });

// const historySchema = new Schema({
//   robotName: { type: String, required: true },
//   date: { type: Date, default: Date.now },
//   mapName: { type: String, required: true },
//   image: { type: String, required: true },
//   timeTaken: { type: Number, required: true },
//   percentCompleted: { type: Number, required: true },
//   status: { type: String, required: true },
//   linearVelocities: [velocitySchema], // Linear velocities stored as a separate list
//   angularVelocities: [velocitySchema], // Angular velocities stored as a separate list
//   position: { type: Object, required: true },
//   orientation: { type: Object, required: true },
// });

// const History = model("History", historySchema);
// export default History;






//---------------------------------------------------- All Values in List -------------------------------------



import { Schema, model } from "mongoose";

const vectorSchema = new Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  z: { type: Number, required: true },
}, { _id: false });

const orientationSchema = new Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  z: { type: Number, required: true },
  w: { type: Number, required: true },
}, { _id: false });

const historySchema = new Schema({
  robotName: { type: String, required: true },
  date: { type: Date, default: Date.now },
  mapName: { type: String, required: true },
  image: { type: String, required: true },
  timeTaken: { type: Number, required: true },
  percentCompleted: { type: Number, required: true },
  status: { type: String, required: true },
  linearVelocities: [vectorSchema], // Linear velocities stored as a separate list
  angularVelocities: [vectorSchema], // Angular velocities stored as a separate list
  positions: [vectorSchema], // Positions stored as a separate list
  orientations: [orientationSchema], // Orientations stored as a separate list
});

const History = model("History", historySchema);
export default History;
