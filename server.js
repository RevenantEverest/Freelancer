require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const chalk = require('chalk');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.set('trust proxy', true);
app.set('trust proxy', 'loopback');

app.use("/", (req, res) => res.json({ message: "Freelancer-API" }));
app.listen(PORT, () => console.log(chalk.hex("#00ff00")("[HTTP]") + ` Freelancer API listening on port ${PORT}`));