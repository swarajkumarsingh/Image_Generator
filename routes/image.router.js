const {
  generateImage,
  getAllImages
  
} = require("../controllers/image.controller.js");

const router = require("express").Router();

router.post("/openai/generate-image", generateImage);
router.get("/openai/get-images", getAllImages);

module.exports = router;