// src/Controllers/robotControled.js
import Robot from "../Models/Robot.js";

const getRobots = async (req, res) => {
  try {
    const robots = await Robot.find(); // Use Robot.find()
    res.json(robots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRobot = async (req, res) => {
  const { name, mapName, image, timeTaken, percentCompleted, status } = req.body;

  const newRobot = new Robot({
    name,
    mapName,
    image,
    timeTaken,
    percentCompleted,
    status,
  });

  try {
    const savedRobot = await newRobot.save();
    res.status(201).json(savedRobot);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getRobots, createRobot }; 