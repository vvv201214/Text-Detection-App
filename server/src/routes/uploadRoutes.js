const express = require('express');
const {uploadMulter, uploadImage} = require('../controllers/uploadController');

const router = express.Router();


router
  .route("/")
  .post(uploadMulter, uploadImage);

// router.route('/').post(getUploads);
// router.route('/').post(upload.array("files"), getUploads);



module.exports = router;