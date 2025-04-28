// ----------------------------
// Required Packages Install करें
// ----------------------------
// Terminal में चलाएं:
// npm install express dotenv axios
// ----------------------------

require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

// ----------------------------
// Middleware for Security
// ----------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------------------
// Environment Variables
// ----------------------------
const FRAMEPACK_API_KEY = process.env.FRAMEPACK_API_KEY;
const API_BASE_URL = 'https://api.framepack.com/v1'; // Replace with actual API URL

// ----------------------------
// Secure API Call Function
// ----------------------------
async function makeSecureApiCall(endpoint, data) {
  try {
    const response = await axios.post(`${API_BASE_URL}/${endpoint}`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${FRAMEPACK_API_KEY}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw new Error('Request failed');
  }
}

// ----------------------------
// Sample Route (आपके use case के अनुसार बदलें)
// ----------------------------
app.post('/process-image', async (req, res) => {
  try {
    const userData = req.body;
    
    // Input Validation
    if (!userData.imageUrl) {
      return res.status(400).json({ error: 'Image URL required' });
    }

    const apiResponse = await makeSecureApiCall('process', {
      image: userData.imageUrl,
      settings: {
        quality: 'high',
        format: 'jpeg'
      }
    });

    res.json({
      success: true,
      result: apiResponse
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Internal Server Error'
    });
  }
});

// ----------------------------
// Server Start
// ----------------------------
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
