const userModel = require('./userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const key = process.env.JWT_SECRET || 'defaultSecretKey'; // Store in environment variable

module.exports.createUserDBService = async (userDetails) => {
  try {
    const hashedPassword = bcrypt.hashSync(userDetails.password, 8);
    const userModelData = new userModel({
      firstname: userDetails.firstname,
      lastname: userDetails.lastname,
      email: userDetails.email,
      password: hashedPassword,
      role: userDetails.role || 'client'
    });

    const existingUser = await userModel.findOne({ email: userDetails.email });
    if (existingUser) {
      return { status: false, message: "Email already exists" };
    }

    const savedUser = await userModelData.save();
    return { status: true, user: savedUser };
  } catch (error) {
    console.log(error);
    throw new Error('Error saving user');
  }
};

module.exports.loginUserDBService = async (userDetails) => {
  try {
    const user = await userModel.findOne({ email: userDetails.email });
    if (!user) {
      return { status: false, msg: "User not found" };
    }

    const passwordIsValid = bcrypt.compareSync(userDetails.password, user.password);
    if (!passwordIsValid) {
      return { status: false, msg: "Invalid password" };
    }

    const token = jwt.sign({ id: user._id, role: user.role }, key, {
      expiresIn: 86400 // 24 hours
    });

    return { status: true, token: token };
  } catch (error) {
    console.log(error);
    throw new Error('Error during user validation');
  }
};
