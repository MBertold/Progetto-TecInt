const express = require('express')
const cors =require("cors");
const app = express()
const port = 5000
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const shopRoute = require("./routes/locali")
dotenv.config();

const corsOption = {
    origin : "http://localhost:3000",
    credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200
};
app.use(cors(corsOption));

mongoose.connect(
    process.env.MONGO_URL
    ).then(()=>console.log("connessione riuscita")).catch((err)=> {console.log(err)});

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth",authRoute);
app.use("/api/shop",shopRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
