const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🛍️ Welcome to My E-Commerce App!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`E-Commerce App running on port ${PORT}`);
});
