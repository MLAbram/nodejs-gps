const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
return res.status(200).json({title: 'Node.js GPS'});
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000.');
});