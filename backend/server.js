require('dotenv').config();
const express = require('express');
const cors = require('cors');
const knexConfig = require('./knexfile');
const Knex = require('knex');
const { Model } = require('objection');

// DB connection
const knex = Knex(knexConfig.development);
Model.knex(knex);

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
  allowedHeaders:["Content-Type"]
}));


app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Job Management API is running');
});

// Import job routes
const jobRoutes = require('./routes/jobRoutes');
app.use('/api/jobs', jobRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
