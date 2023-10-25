const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ahmed_H:ahmed123@mydb.ueqpqxh.mongodb.net/recapTask"
    );
    console.log("Connected");
  } catch (error) {
    console.log("DB connection Error");
  }
};

module.exports = connectDB;
