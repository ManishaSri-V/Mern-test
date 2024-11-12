const { User } = require("../models/userModel");
const { generateToken } = require("../config/auth");

const registerUser = async (req, res) => {
  const { username, role, password } = req.body;
  try {
    // user is a mongodb document
    const user = new User({
      username: username,
      role: role,
      password: password,
    });

    // save this user inside mongodb.
    await user.save();

    // generate the token for this user who has just been registered
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      token: token,
      data: user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  try {
    // mongoDb operation to find the user
    const user = await User.findOne({ username: username });

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id);

      res.status(200).json({
        success: true,
        token: token,
        data: user,
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { registerUser, loginUser };
