const { Configuration, OpenAIApi } = require("openai");
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

module.exports = { generateImage };
