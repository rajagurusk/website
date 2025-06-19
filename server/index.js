require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET'],
  credentials: true
}));
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✓ MongoDB connected'))
  .catch(err => console.error('MongoDB error:', err));

// Contact schema
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// Reuse transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  logger: true,
  debug: true
});

// POST endpoint to save and email contact
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Submission from ${newContact.firstName} ${newContact.lastName}`,
      text: `
First Name: ${newContact.firstName}
Last Name: ${newContact.lastName}
Email: ${newContact.email}
Phone: ${newContact.phone}
Message: ${newContact.message}
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);

    res.status(201).json({ success: true, contact: newContact });
  } catch (err) {
    console.error('Contact POST error:', err);
    res.status(400).json({ success: false, error: err.message });
  }
});

// Catch-all 404 route
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () =>
  console.log(`🚀 Server listening on http://localhost:${port}`)
);
