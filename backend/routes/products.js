const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/get_product', async (req, res, next) => {
    try {
        // Make a POST request to the external API
        const response = await axios.post('https://api.fwd.co.th/dev-ecommerce/getProduct/', req.body);

        // Extract the data from the response
        const products = response.data;

        // Send the data back to the client
        res.json(products);
    } catch (err) {
        // Pass the error to the Express error handling middleware
        next(err);
    }
});

module.exports = router;