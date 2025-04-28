const axios = require('axios');

// Export the function properly
module.exports = async function generateVideo(req, res) {
  try {
    const { video_id } = req.body;

    // Check if video_id is provided
    if (!video_id) {
      return res.status(400).json({ error: 'Missing video_id in request body' });
    }

    // Framepack API endpoint
    const apiUrl = 'https://api.framepack.ai/v1/generate';

    // API Request headers with your API key
    const headers = {
      Authorization: 'Bearer 43b8871e-0f24-4b8c-8794-b05c7d74a074:62587f324a4d45c98075b9b9875af8f8', // Replace with your actual API key
    };

    // Send the request to Framepack API
    const response = await axios.post(apiUrl, { video_id }, { headers });

    // Return the successful response to the client
    res.status(200).json(response.data);

  } catch (error) {
    console.error('Error generating video:', error.message);
    res.status(500).json({ error: 'Error generating video', message: error.message });
  }
};
