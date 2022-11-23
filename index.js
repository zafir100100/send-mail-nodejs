const express = require('express');
const app = express();
const port = 3001;
var cors = require('cors');
var MailRoutes = require('./routes/mail.route.js');

app.use(cors());
app.use(express.json());
app.use(MailRoutes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));