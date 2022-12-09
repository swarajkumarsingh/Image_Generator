const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Image", imageSchema, "Image");
