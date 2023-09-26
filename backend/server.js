const express = require("express");
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require("cors");

const PORT = 8080;

dotenv.config();

const app = express();

app.use(morgan('tiny'))
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(require("./routes/usersRoutes"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
