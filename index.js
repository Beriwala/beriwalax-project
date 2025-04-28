const axios = require('axios');

// Function to handle the API request
async function generateVideo(req, res) {
    try {
        const response = await axios.post('https://api.framepack.ai/v1/generate', {
            headers: {
                Authorization: 'Bearer 43b8871e-8fd2-48bc-8794-50b9c5c7c7d7:a6285f7804a0a0b5e609c75b79605af8',  // Framepack API key
            },
            video_id: 'your_video_id',  // Replace with actual video ID or parameters
            // Add any other necessary parameters required by Framepack API
        });

        // Return response to Vercel function
        res.status(200).json(response.data);
    } catch (error) {
        // Log the error and return it as a response
        console.error("Error generating video:", error.message);
        res.status(500).json({ error: "Error generating video", message: error.message });
    }
}

// Export the handler function for Vercel
module.exports = generateVideo;
