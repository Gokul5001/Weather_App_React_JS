const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors()); // Add this line to enable CORS
app.use(express.json());

app.post('/evaluate', async (req, res) => {
  const { principal, action, resource } = req.body;
  // Replace this with your actual evaluation logic
  const allowed = principal === 'admin' && action === 'search-weather';

  res.json({ allowed });
});

app.listen(port, () => {
  console.log(`Policy server running at http://localhost:${port}`);
});
