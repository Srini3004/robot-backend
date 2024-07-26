import StartMappingData from "../Models/startMapping.js";

export const startMapping = async (req, res) => {
  try {
    const { userId } = req.body;

    return res.status(200).json({
      success: true,
      message: "Mapping started successfully.",
      userId,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while starting the mapping process.",
      error: error.message,
    });
  }
};

export const saveMappingData = async (req, res) => {
  try {
    const {
      userId,
      mode,
      feedback,
      linear_velocity,
      angular_velocity,
      current_position,
      current_orientation,
      map_image,
      completion_command,
      map_name,
      timeTaken,
      status,
      percentageCompleted,
    } = req.body;

    console.log(`Request body:
      userId: ${userId},
      mode: ${mode},
      feedback: ${feedback},
      linear_velocity: ${JSON.stringify(linear_velocity)},
      angular_velocity: ${JSON.stringify(angular_velocity)},
      current_position: ${JSON.stringify(current_position)},
      current_orientation: ${JSON.stringify(current_orientation)},
      map_image: ${map_image},
      completion_command: ${completion_command},
      map_name: ${map_name},
      timeTaken: ${timeTaken},
      status: ${status},
      percentageCompleted: ${percentageCompleted}`);

    if (
      !userId ||
      !mode ||
      !feedback ||
      !linear_velocity ||
      !angular_velocity ||
      !current_position ||
      !current_orientation ||
      !map_image ||
      !completion_command ||
      !map_name ||
      !timeTaken ||
      !status ||
      !percentageCompleted
    ) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided.",
      });
    }
    const existingData = await MapData.findOne({ userId, map_name  });
    if (existingData) {
      return res.status(400).json({
        success: false,
        message: "Mapping data already exists for this User and Map Name ",
      });
    }
    const startMappingData = new StartMappingData({
      userId,
      mode,
      feedback,
      linear_velocity,
      angular_velocity,
      current_position,
      current_orientation,
      map_image,
      completion_command,
      map_name,
      timeTaken,
      status,
      percentageCompleted,
    });

    await startMappingData.save();

    return res.status(201).json({
      success: true,
      message: "Mapping data saved successfully.",
      data: startMappingData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while saving mapping data.",
      error: error.message,
    });
  }
};

export const listMaps = async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) {
      return res.status(400).json({ error: "userId is required." });
    }
    const maps = await  StartMappingData.find({ userId });

    if (maps.length === 0) {
      return res.json({
        message: "No maps available. Please start mapping first.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Maps retrieved successfully.",
      data: maps,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving maps.",
      error: error.message,
    });
  }
};