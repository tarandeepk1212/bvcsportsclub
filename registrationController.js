// controllers/registrationController.js
const Registration = require('../models/registrationModel');

exports.calculateFee = (req, res) => {
  const { id, fullName, address, status } = req.body;
  let fee = 0;

  switch (status) {
    case 'student':
      fee = 10;
      break;
    case 'staff':
      fee = 50;
      break;
    case 'volunteer':
      fee = 0;
      break;
    default:
      fee = 0;
  }

  const registration = new Registration(id, fullName, address, status, fee);
  res.json(registration);
};
