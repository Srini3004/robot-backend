// models/Robot.js

import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const robotSchema = new Schema({
  robotId: { type: String, required: true, unique: true },
  emailId: { type: String, required: true},
  name: { type: String, required: true },
  model: { type: String, required: true },
  serialNumber: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  status: { 
    type: String, 
    required: true, 
    enum: ['active', 'inactive', 'maintenance', 'decommissioned'], 
    default: 'active' 
  },
  lastMaintenanceDate: { type: Date, required: true },
  location: { type: String, required: true },
}, { timestamps: true });

const Robot = mongoose.model('Robot', robotSchema);

export default Robot;
