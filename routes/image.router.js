const {
  generateImage,
  getAllImages,
} = require("../controllers/image.controller.js");

const router = require("express").Router();

router.post("/generate-image", generateImage);
router.get("/get-images", getAllImages);

module.exports = router;