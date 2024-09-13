/**
 * Developers:
 * First Name: Itzik
 * Last Name: Ben Harush
 * ID: 312429525
 *
 * First Name: Dikla
 * Last Name: Felach
 * ID: 207377300
 */

// Import the Calorie model to interact with the calorie collection in MongoDB
const Calorie = require('../models/calories');
// Import the express module
const express = require('express');
// Create a new router object to handle routes
const router = express.Router();

// Define a POST route for adding a new calorie entry
router.post('/', async (req, res) => {
  try {
    // Destructure and extract fields from the request body
    const { 
      user_id,
      year,
      month,
      day,
      description,
      category,
      amount
    } = req.body;

    // Create a new Calorie document instance with the extracted values
    const newCalorie = new Calorie ({
      user_id,
      year,
      month,
      day,
      description,
      category,
      amount
    });

    // Save the new calorie entry to the database
    await newCalorie.save();

    // If successful, respond with a 201 Created status and the new calorie entry
    res.status(201).json(newCalorie);
  } catch (error) {
    // If an error occurs, respond with a 500 Internal Server Error status and the error message
    res.status(500).json({error: error.message});
  }
});

// Export the router so it can be used in other parts of the application
module.exports = router;

