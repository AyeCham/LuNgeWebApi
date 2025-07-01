const express = require('express');
const app = express();
const chatbotRoutes = require('./routes/chatbot');

require('dotenv').config();
app.use(express.json());

app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
