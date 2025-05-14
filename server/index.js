const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

const customerSchema = new mongoose.Schema({
  name: String,
  phone: String,
});

const Customer = mongoose.model('Customer', customerSchema);

app.post('/api/customers', async (req, res) => {
  const { name, phone } = req.body;
  const newCustomer = new Customer({ name, phone });
  await newCustomer.save();
  res.status(201).send('Customer saved');
});

app.listen(5000, () => console.log('Server running on port 5000'));
