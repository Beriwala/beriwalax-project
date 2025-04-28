const axios = require('axios');

async function generateVideo(req, res) {
    try {
        // Cors Anywhere proxy ka use karke Framepack API ko call karo
        const response = await axios.post('https://cors-anywhere.herokuapp.com/https://api.framepack.ai/v1/generate', {
            headers: {
                Authorization: Bearer ${process.env.FRAMEPACK_API_KEY}, // Tumhara Framepack API key daalna hoga
            },
            video_id: 'your_video_id',  // Apna video_id yaha daalna hoga
        });

        // Agar API call successful ho gaya toh response ko return karo
        res.status(200).json(response.data);  // Success ka response
    } catch (error) {
        // Agar koi error aaye, toh wo error display karo
        console.error("Error generating video:", error.message);
        res.status(500).json({ error: "Error generating video", message: error.message });
    }
}

module.exports = generateVideo;
