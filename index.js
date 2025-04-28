const express = require('express');
const axios = require('axios');
const app = express();

// Parse incoming JSON requests
app.use(express.json());

// API handler function
async function generateVideo(req, res) {
  try {
    const { video_id } = req.body; // Make sure req.body is parsed

    // Check if video_id exists
    if (!video_id) {
      return res.status(400).json({ error: 'Missing video_id in request body' });
    }

    const apiUrl = 'https://api.framepack.ai/v1/generate';
    const headers = {
      Authorization: 'Bearer 43b8871e-0f24-4b8c-8794-b05c7d74a074:62587f324a4d45c98075b9b9875af8f8', // replace with your real API key
    };

    const response = await axios.post(apiUrl, { video_id }, { headers });

    res.status(200).json(response.data);

  } catch (error) {
    console.error('Error generating video:', error.message);
    res.status(500).json({ error: 'Error generating video', message: error.message });
  }
}

// Route
app.post('/api/generateVideo', generateVideo);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
