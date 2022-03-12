const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;
// Db Connection
const uri = "mongodb://localhost:27017/crudapi";
mongoose.connect(uri, { 
   /*  useNewUrlParser: true,
     useCreateIndex: true,
      useUnifiedTopology: true */
    });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDb Connection Succesful');
});
// import routes
userRoutes = require("./routes/users");
// Middlewares
app.use(express.json());
app.use(cors());
//routes middlewares
app.use("/api/users" , userRoutes);
app.listen(port, () => {
    console.log(`Example app listening at 5000 `)
})