const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
dotenv.config();



mongoose.connect(
    process.env.MONGO_URL
    ).then(()=>console.log("connessione riuscita")).catch((err)=> {console.log(err)});

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth",authRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
