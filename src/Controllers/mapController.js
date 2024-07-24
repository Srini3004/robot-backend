import MapData from "../Models/Mapping.js";
import JobHistory from "../Models/roboJobHistory.js";

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

    const mapData = new MapData({
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

      status,
      percentageCompleted,
    });

    await mapData.save();

    const jobHistory = new JobHistory({
      userId,
      mapId: mapData._id,
      mapName: map_name,
      mapImage: map_image,
      status,
      timeTaken,
      percentageCompleted,
    });

    await jobHistory.save();

    return res.status(201).json({
      success: true,
      message: "Mapping data saved successfully.",
      mapId: mapData._id,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while saving mapping data.",
      error: error.message,
    });
  }
};

export const startDisinfection = async (req, res) => {
  try {
    const { userId, mapId } = req.body;
    if (!userId || !mapId) {
      return res.status(400).json({ error: "userId and mapId are required." });
    }
    const map = await MapData.findById(mapId);
    if (!map) {
      return res.status(404).json({ error: "Map not found." });
    }

    // logics
    //  start disinfection process here
    //  real-time robot position on the map

    return res.status(200).json({
      success: true,
      message: "Disinfection started successfully.",
      map,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while start disinfect.",
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
    const maps = await MapData.find({ userId });

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

export const jobHistory = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res
        .status(400)
        .json({ status: false, message: "userId is required." });
    }
    const history = await JobHistory.find({ userId });
    return res.status(200).json({
      success: true,
      message: "Job history retrieved successfully.",
      data: history,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while retrieving job history.",
      error: error.message,
    });
  }
};
export const getMappingData = async (req, res) => {
  try {
    const { robotId } = req.params;

    // Find map data by robotId
    const mapData = await MapData.findOne({ robotId });

    if (!mapData) {
      return res.status(404).json({ message: "Map data not found for the given robot ID" });
    }

    return res.json(mapData);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};