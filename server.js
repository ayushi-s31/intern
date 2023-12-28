const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB URL)
mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up routes and middleware here

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
