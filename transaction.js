const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    description: String,
    amount: Number,
    date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

// In server.js, add the following lines
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('your_database_url', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

// Define routes
app.get('/transactions', async (req, res) => {
    const transactions = await Transaction.find();
    res.json(transactions);
});

app.post('/transactions', async (req, res) => {
    const { description, amount } = req.body;
    const newTransaction = new Transaction({ description, amount });
    await newTransaction.save();
    res.json(newTransaction);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});