const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const userModel = require("../model/user.model");

async function registerUser(req, res) {
  try {
    const { username, email, password, role } = req.body;

    const isUserExisted = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (isUserExisted) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hash = await bcrypt.hash(password, 10); // 10 is sailting which delaying the attackers risk ,can delayed too life long

    const user = await userModel.create({
      username,
      email,
      password: hash, // ← fixed
      role,
    });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SCRETE
    );

    res.cookie("token", token);

    return res.status(201).json({
      message: "User created successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: err.message }); // ← fixed
  }
}
async function loginUser(req, res) {
  const { username, email, password } = req.body;

  const user = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (!user) {
    return res.status(401).json({ message: "Invalid Credential" });
  }
  const isPaswordValid = await bcrypt.compare(password, user.password);

  if (!isPaswordValid) {
    return res.status(401).json({ message: "Invalid Credential" });
  }
  const token = jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SCRETE,
  );
  res.cookie("token", token);

res.status(200).json({
  message: "User logged in succesfully",
  user: {
    id: user._id,
    username: user.username,
    email: user.email,
    role: user.role,
  },
});
}

async function logoutuser(req,res){
  res.clearCookie("token")
  res.status(200).json({message:"User logged out sucessfully" })
}

module.exports = { registerUser ,loginUser,logoutuser};
