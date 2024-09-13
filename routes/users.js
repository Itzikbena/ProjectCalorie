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


var express = require('express');
var router = express.Router();
const User = require("../models/user"); // Assuming you have a User model

router.get('/:id', async function(req, res, next) {
  try {
    const userId = req.params.id;

    // Find user by `id` field (assuming this is a string or number, not the MongoDB _id)
    const user = await User.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});


module.exports = router;

