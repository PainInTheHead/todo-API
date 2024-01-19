const User = require('./../models/User')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


exports.userRegister = async (req, res) => {
    const validNewUser = await User.findOne({ email: req.body.email });
    if (validNewUser) {
      res.sendStatus(409).json({ message: "not Valid email, try again :(" });
      console.log("Beda");
    }
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;
    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save().then(() => console.log("User created"));
      res.status(201).json(user);
    } catch (error) {
      console.log(error);
    }
  }


  exports.userLog = async (req, res) => {
    const getUser = await User.findOne({ email: req.body.email });
    if (getUser) {
      const password = bcrypt.compareSync(req.body.password, getUser.password);
      if (password) {
        const token = jwt.sign(
          {
            email: getUser.email,
            userId: getUser._id,
          },
          "dev-jwt",
          { expiresIn: 60 * 60 }
        );
        res.status(200).json({ token: `Bearer ${token}` });
      } else {
        res.status(401).json({ message: "password not valid" });
      }
    } else {
      res.status(404).json({ message: "User not Found" });
    }
  }