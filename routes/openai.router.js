const { generateImage } = require("../controllers/openai.controller");

const router = require("express").Router();

router.post("/generate-image", generateImage);

module.exports = router;
