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

// Import mongoose module for MongoDB integration
const mongoose = require('mongoose');

// Define the schema for a calorie document
const calorieSchema = new mongoose.Schema({
    user_id: String, // Identifier for the user
    year: Number, // Year of the calorie entry
    month: Number, // Month of the calorie entry
    day: Number, // Day of the calorie entry
    id: {
        type: Number,
        // Generate a default ID by randomly selecting a number between 0 and 999. (Note: You may want to ensure uniqueness in a different way in a real app.)
        default: function() { return Math.floor(Math.random() * 1000); }
    },
    description: String, // Description of the calorie entry
    category: String, // Category of the food or activity
    amount: Number // The amount of calories consumed or burned
});

// Create a model from the schema
const dbCalorie = mongoose.model('Calorie', calorieSchema);

// Export the model to use it in other parts of the application
module.exports = dbCalorie;

