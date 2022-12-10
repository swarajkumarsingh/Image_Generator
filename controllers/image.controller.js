const { Configuration, OpenAIApi } = require("openai");
const model = require("../models/image.model.js");
const { OPEN_AI_KEY } = require("../config/keys.js");

const configuration = new Configuration({
  apiKey: OPEN_AI_KEY,
});
const openai = new OpenAIApi(configuration);

const generateImage = async (req, res) => {
  const { prompt, size } = req.body;

  const imageSize =
    size === "small" ? "256x256" : size === "medium" ? "512x512" : "1024x1024";

  try {
    const response = await openai.createImage({
      prompt: prompt,
      n: 1,
      size: imageSize,
    });

    const imageUrl = response.data.data[0].url;

    await model.create({
      prompt,
      size,
      imageUrl,
    });

    return res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    return res.status(error.response.status).json({
      success: false,
      error: error.response.data.error.message,
    });
  }
};

const getAllImages = async (req, res) => {
  try {
    const data = await model.find();

    return res.status(200).json({
      success: true,
      length: data.length,
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "error while fetching table data",
    });
  }
};

module.exports = { generateImage, getAllImages };
