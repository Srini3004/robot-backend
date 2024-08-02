import User from '../Models/User.js';

export const getUserDetails = async (req, res) => {
  try {
    //const { id } = req.params; // Extract id from route parameters
    const userId = req.user.id;
    // Find user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Send user details (omit sensitive information)
     
    const userDetails = {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      organizationName: user.organizationName,
      otp: user.otp,
      forgotPasswordOtp: user.forgotPasswordOtp,
      isFirstTime: user.isFirstTime,
      isOtpVerified: user.isOtpVerified,
      primaryContact: user.primaryContact,
      locations: user.locations,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
    res.json(userDetails);
  } catch (error) {
    console.error('Error fetching user details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



