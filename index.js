// https://www.google.com/search?q=node.js+use+mobile+gps+location&newwindow=1
// https://stackoverflow.com/questions/20012977/how-to-use-node-js-in-a-real-time-gps-tracking-application

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
return res.status(200).json({title: 'Node.js GPS'});
});

app.listen(3000, () => {
  console.log('Server listening on port: 3000.');
});