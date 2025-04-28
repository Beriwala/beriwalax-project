const axios = require('axios');

// Async function to handle Framepack API request
async function generateVideo() {
    try {
        const response = await axios.post('https://api.framepack.ai/v1/generate', {
            headers: {
                Authorization: 'Bearer 43b8871e-8fd2-48bc-8794-50b9c5c7c7d7:a6285f7804a0a0b5e609c75b79605af8',  // Framepack API key
            },
            video_id: 'your_video_id',  // Replace with actual video ID or parameters
            // Add any other necessary parameters required by Framepack API
        });

        // Log the response data or use it in your app
        console.log("Video generation response:", response.data);
    } catch (error) {
        // Catch and log any errors
        console.error("Error generating video:", error.message);
    }
}

// Call the function to generate video
generateVideo();
