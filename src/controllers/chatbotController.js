// src/controllers/chatbotController.js
const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(config);

exports.chatHandler = async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Message required' });

  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: message }],
  });

  res.json({ reply: completion.data.choices[0].message.content });
};
