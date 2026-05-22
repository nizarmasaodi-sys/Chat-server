const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// مسار GET عشان تتأكد ان السيرفر شغال
app.get('/', (req, res) => {
  res.send('Server is running');
});

// مسار POST للدردشة
app.post('/chat', (req, res) => {
  const userMessage = req.body.message;
  
  // هنا تحط منطق الرد - حالياً رد تجريبي
  const reply = `وصلتني رسالتك: ${userMessage}`;
  
  res.json({ reply: reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
