const UserModel = require("../models/UserModels");
const jwt = require("jsonwebtoken");

module.exports.SignUp = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  if (!name) {
    return res.send({ code: 400, message: "Name is required" });
  } else if (!password) {
    return res.send({ code: 400, message: "Password is required" });
  } else if (!password) {
    return res.send({ code: 400, message: "Password is required" });
  } else {
    const newUser = new UserModel({ name, password, email });
    const isSaved = await newUser.save();
    if (isSaved) {
      res.send({ code: 200, message: "saved" });
    } else {
      res.send({ code: 500, message: "server error" });
    }
  }
};

module.exports.Login = async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  if (!name) {
    return res.send({ code: 400, message: "Name is required" });
  } else if (!password) {
    return res.send({ code: 400, message: "Password is required" });
  } else {
    const isExist = await UserModel.findOne({ name: name });
    console.log(isExist, "ishfgkfdhgkfhgkj");
    if (isExist) {
      const token = jwt.sign(
        {
          name: isExist.name,
          password: isExist.password,
        },
        "MYKEY",
        { expiresIn: "1h" }
      );
      if (isExist.password == req.body.password) {
        return res.send({
          code: 200,
          message: "Login successfull",
          token: token,
          userId: isExist,
        });
      }
    } else {
      return res.send({ code: 400, message: "Name Not Found" });
    }
  }
};
