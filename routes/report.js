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

// Import necessary modules
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb'); // Not used in the provided snippet
const Calorie = require('../models/calories'); // Model for accessing calorie data

// Define a route to handle GET requests
router.get('/', async (req, res) => {
    const { user_id, year, month } = req.query; // Extract user_id, year, and month from query parameters
    // Initialize categories with empty arrays
    const caloriesCategories = { breakfast: [], lunch: [], dinner: [], other: [] };

    try {
        // Find calorie entries matching the criteria
        const report = await Calorie.find({year, month, user_id}).select("day description amount category");
        // Iterate over each entry and categorize
        report.forEach(calorie => {
            const entry = { // Construct an entry object
                day: calorie.day,
                description: calorie.description,
                amount: calorie.amount
            };
            const currentCalorieCategory = calorie.category;
            // Check if the category exists, otherwise default to "other"
            if (!caloriesCategories[currentCalorieCategory]) {
                console.warn(`Undefined category '${currentCalorieCategory}' for calorie entry. Defaulting to 'other'.`);
                caloriesCategories['other'].push(entry);
            } else {
                caloriesCategories[currentCalorieCategory].push(entry);
            }          
        });
        // Respond with categorized entries
        res.status(200).json(caloriesCategories);
    } catch (error) { // Catch and respond to any errors
        res.status(500).json({error: error.message});
    }
});

module.exports = router; // Export the router for use in the application
