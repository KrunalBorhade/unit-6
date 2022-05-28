const express = require("express");
const connectDB = require("./config/db");

const app = express();


connectDB();

app.use(express.json());



app.use('/', require('./routes'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, async  (req,res)=>  {
    try {
      console.log(`listening on port ${PORT}`);
    } catch (err) {
      console.error(err.message);
    }
  });