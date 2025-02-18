const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

connectDB(); // Connect to MongoDB

const app = express();
app.use(express.json());
app.use(cors());

// Sample Route
app.get('/', (req, res) => {
  res.send('API is running without .env...');
});

// User Routes Example
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = 5000; // Hardcoded PORT
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
