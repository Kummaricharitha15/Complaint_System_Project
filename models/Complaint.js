const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  status: {
    type: String,
    default: "Pending"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Complaint', complaintSchema);