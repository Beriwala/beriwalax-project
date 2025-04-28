const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
  res.send('BeriwalaX Server is Running!');
});

// Generate Route
app.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await axios.post('https://fal.run/fal-ai/framepack/api', 
      { prompt: prompt },
      {
        headers: {
          Authorization: Bearer ${process.env.FRAMEPACK_API_KEY},
          'Content-Type': 'application/json'
        }
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});