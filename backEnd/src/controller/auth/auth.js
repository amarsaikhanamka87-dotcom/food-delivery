import { User } from "../../model/userShema.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const JWT_SECTET = process.env.JWT_SECTET;
// //const token = jwt.sign({ email: "amka123" }, JWT_SECTET, {
//   expiresIn: "7d",
// });

const publicUser = (user) => {
  return {
    email: user.email,
    role: user.role,
    _id: user.id,
  };
};

const createToken = (user) => {
  return jwt.sign({ email: user.email }, JWT_SECTET, {
    expiresIn: "7d",
  });
};

// SIGHUP ~HASH
export const signUpController = async (req, res) => {
  const SALT_ROUND = 10;

  const { email, password } = req.body;

  const token = createToken();

  try {
    const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
    const user = await User.create({ email, password: hashedPassword });
    res.status(200).json({ messange: "Success", user, token: token });
  } catch (err) {
    res.status(500).json({ messange: "fail" });
  }
};

//  LOGIN.  ~COMPARE
export const loginController = async (req, res) => {
  const { password, email } = req.body;
  // const { user } = req;
  const user = User.findOne({ email });

  try {
    const passMatching = await bcrypt.compare(password, user.password);

    if (!passMatching) {
      res.status(400).json({ message: "Wrong password" });
    }
    res.status(200).json({ messange: "Success loginController", user });
  } catch (err) {
    res.status(500).json({ messange: "FAIL LOGINCONTROLLER" });
  }
};
