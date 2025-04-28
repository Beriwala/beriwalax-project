const axios = require('axios');

// Export the function properly so that Vercel knows how to handle it
module.exports = async function generateVideo(req, res) {
    try {
        // Check if the video_id is provided in the request body
        const { video_id } = req.body;  // Destructure video_id from request body

        // If video_id is not provided, return an error
        if (!video_id) {
            return res.status(400).json({ error: "video_id is required" });
        }

        // Framepack API URL
        const apiUrl = 'https://api.framepack.ai/v1/generate';

        // API Request headers with your API key
        const headers = {
            Authorization: Bearer 43b8871e-8fd2-48bc-8794-50b9c5c7c7d7:a6285f7804a0a0b5e609c75b79605af8, // Your Framepack API key
        };

        // Send the request to Framepack API with video_id
        const response = await axios.post(apiUrl, {
            video_id: video_id,  // Pass the video_id from the request body
        }, { headers });

        // Return the response to the client
        res.status(200).json(response.data);  // Success response
    } catch (error) {
        // If any error occurs, log it and return the error message
        console.error("Error generating video:", error.message);
        res.status(500).json({ error: "Error generating video", message: error.message });
    }
};
