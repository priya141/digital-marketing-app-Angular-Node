// backend/server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/social-media', require('./routes/socialMediaRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
