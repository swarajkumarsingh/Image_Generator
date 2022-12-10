const mongoose = require("mongoose");

const connectDatabase = () => {
  // Remove Depreciation Warnings
  mongoose.set("strictQuery", true);
  mongoose
    .connect("mongodb://localhost:27017/SimpleImage", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => console.log(`Connected to: ${data.connection.host}`));
};

module.exports = connectDatabase;