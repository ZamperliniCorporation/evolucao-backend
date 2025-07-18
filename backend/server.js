const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const iaRoutes = require('./routes/ia');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/ia', iaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
