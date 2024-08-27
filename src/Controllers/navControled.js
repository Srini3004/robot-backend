//--------------------------------------------------- Single Move Navigate  Value Store ----------------------------------------------



// import History from "../Models/History.js";

// const getRobots = async (req, res) => {
//   try {
//     const robots = await History.find();
//     res.status(200).json(robots);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createRobot = async (req, res) => {
//   const {
//     robotName,
//     mapName,
//     image,
//     timeTaken,
//     percentCompleted,
//     status,
//     linear_velocity,
//     angular_velocity,
//     position,
//     orientation,
//   } = req.body;

//   if (
//     !robotName ||
//     !mapName ||
//     !image ||
//     !status ||
//     !linear_velocity ||
//     !angular_velocity ||
//     !position ||
//     !orientation
//   ) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const newHistory = new History({
//     robotName,
//     mapName,
//     image,
//     timeTaken: timeTaken || 0,
//     percentCompleted: percentCompleted || 0,
//     status,
//     linear_velocity,
//     angular_velocity,
//     position,
//     orientation,
//   });

//   try {
//     const savedHistory = await newHistory.save();
//     res.status(201).json(savedHistory);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };


// export { getRobots, createRobot };






//-------------------------------------Linear And Angular Same list  ----------------------------------------------------





// import History from "../Models/History.js";

// const getRobots = async (req, res) => {
//   try {
//     const robots = await History.find();
//     res.status(200).json(robots);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createRobot = async (req, res) => {
//   const {
//     robotName,
//     mapName,
//     image,
//     timeTaken,
//     percentCompleted,
//     status,
//     velocities,
//     position,
//     orientation,
//   } = req.body;

//   if (
//     !robotName ||
//     !mapName ||
//     !image ||
//     !status ||
//     !velocities ||
//     !position ||
//     !orientation
//   ) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const newHistory = new History({
//     robotName,
//     mapName,
//     image,
//     timeTaken: timeTaken || 0,
//     percentCompleted: percentCompleted || 0,
//     status,
//     velocities,
//     position,
//     orientation,
//   });

//   try {
//     const savedHistory = await newHistory.save();
//     res.status(201).json(savedHistory);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export { getRobots, createRobot };




//------------------------------------------------- List in Linear   And Angular----------------------------------------------------


// import History from "../Models/History.js";

// const getRobots = async (req, res) => {
//   try {
//     const robots = await History.find();
//     res.status(200).json(robots);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const createRobot = async (req, res) => {
//   const {
//     robotName,
//     mapName,
//     image,
//     timeTaken,
//     percentCompleted,
//     status,
//     linearVelocities,
//     angularVelocities,
//     position,
//     orientation,
//   } = req.body;

//   if (
//     !robotName ||
//     !mapName ||
//     !image ||
//     !status ||
//     !linearVelocities ||
//     !angularVelocities ||
//     !position ||
//     !orientation
//   ) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const newHistory = new History({
//     robotName,
//     mapName,
//     image,
//     timeTaken: timeTaken || 0,
//     percentCompleted: percentCompleted || 0,
//     status,
//     linearVelocities,
//     angularVelocities,
//     position,
//     orientation,
//   });

//   try {
//     const savedHistory = await newHistory.save();
//     res.status(201).json(savedHistory);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

// export { getRobots,createRobot };





//-------------------------------------------------------------All Value in List --------------------------------------



import History from "../Models/History.js";

const getRobots = async (req, res) => {
  try {
    const robots = await History.find();
    res.status(200).json(robots);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRobot = async (req, res) => {
  const {
    robotName,
    mapName,
    image,
    timeTaken,
    percentCompleted,
    status,
    linearVelocities,
    angularVelocities,
    positions,
    orientations,
  } = req.body;

  if (
    !robotName ||
    !mapName ||
    !image ||
    !status ||
    !linearVelocities ||
    !angularVelocities ||
    !positions ||
    !orientations
  ) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newHistory = new History({
    robotName,
    mapName,
    image,
    timeTaken: timeTaken || 0,
    percentCompleted: percentCompleted || 0,
    status,
    linearVelocities,
    angularVelocities,
    positions,
    orientations,
  });

  try {
    const savedHistory = await newHistory.save();
    res.status(201).json(savedHistory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export { getRobots,createRobot };

