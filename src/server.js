const express = require('express');
const app = express();

const PORT = 4000;

app.use(express.json());

app.use('/api/v1/task', require('./routes/taskRoute'));

app.listen(
    PORT,
    () => console.log(`Server is live on http://localhost:${PORT}`)
);