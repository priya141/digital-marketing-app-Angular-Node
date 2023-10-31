// backend/routes/socialMediaRoutes.js

const express = require('express');
const router = express.Router();

let socialMediaService = {
  name: 'Social Media Marketing',
  price: 550,
  frequency: '3 times weekly post',
};

router.get('/', (req, res) => {
  res.json(socialMediaService);
});

module.exports = router;
