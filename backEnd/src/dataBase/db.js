import mongoose from "mongoose";

const connectingString =
  "mongodb+srv://amarsaikhanamka87_db_user:HN99kzf0wKYUY6nw@cluster0.2vcxdh1.mongodb.net/";

export const db = async () => {
  try {
    mongoose.connect(connectingString);
    console.log("connection dataBase");
  } catch (err) {
    console.log("Fail");
  }
};
