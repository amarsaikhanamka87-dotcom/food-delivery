import { User } from "../../model/userShema.js";
import bcrypt from "bcryptjs";

// SIGHUP    ~HASH
export const signUpController = async (req, res) => {
  const { email, password } = req.body;
  console.log("hello sign controller", email, password);

  const SALT_ROUND = 10;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);
  console.log("hashedPassword", hashedPassword);

  try {
    await User.create({ email, password: hashedPassword });
    res.status(200).json({ messange: "Success" });
  } catch (err) {
    res.status(500).json({ messange: "fail" });
  }
};

//  LOGIN.  ~COMPARE
export const loginController = async (req, res) => {
  console.log("hello login controller", req.body);

  const { password, email } = req.body;

  const user = await User.findOne({ email });
  console.log("user", user);
  console.log("userPassword");

  const passMatching = await bcrypt.compare(password, user.password);
  console.log("passMatching", passMatching);

  try {
    res.status(200).json({ messange: "Success" });
  } catch (err) {
    res.status(500).json({ messange: "FAIL LOGINCONTROLLER" });
  }
};
