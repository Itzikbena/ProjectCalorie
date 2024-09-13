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

// Import the mongoose package to interact with MongoDB
const mongoose = require('mongoose');

// Define a schema for the user collection
const userSchema = new mongoose.Schema({
    id: String, // Unique identifier for the user
    first_name: String, // User's first name
    last_name: String, // User's last name
    birthday: Date // User's date of birth
});

// Create a model from the schema
const dbUser = mongoose.model('User', userSchema);

// Export the User model for use in other parts of the application
module.exports = dbUser;
