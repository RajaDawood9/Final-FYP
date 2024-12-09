const mongoose = require("mongoose");

const mongoURI =
  //   "mongodb+srv://rizwankamal121:YfwmCJa7igE2sDbb@cluster0.yyiy1.mongodb.net/user?retryWrites=true&w=majority";
  //   "mongodb+srv://rizwankamal121:YfwmCJa7igE2sDbb@cluster0.yyiy1.mongodb.net/";
  "mongodb://localhost:27017/college";
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
