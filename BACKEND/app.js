const express = require('express');
const app = express();

app.use(express.json());
app.use(cors('*'));



app.listen(3005, () => console.log("Server listening on port 3005"));
