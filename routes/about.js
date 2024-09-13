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

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { firstname: "Itzik ", lastname: "Ben-Harush", id: 312429525, email: "itzikbena19@gmail.com" },
    { firstname: "Dikla", lastname: "Felach", id: 207377300, email: "DiklaFelach1@gmail.com" }
  ]);
});

module.exports = router;
