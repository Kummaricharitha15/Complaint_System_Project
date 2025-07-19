const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Complaint = require('./models/Complaint');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// ✅ Home Route (to avoid "Cannot GET /" error)
app.get('/', (req, res) => {
  res.send("🚀 Complaint Management System is Running!");
});

// ✅ Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/complaintsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// ✅ Save complaint
app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;
  const complaint = new Complaint({ name, email, message });
  await complaint.save();
  res.send({ success: true });
});

// ✅ Get all complaints
app.get('/complaints', async (req, res) => {
  const data = await Complaint.find();
  res.send(data);
});

// ✅ Start server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});