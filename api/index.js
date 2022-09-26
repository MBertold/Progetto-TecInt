const express = require('express')
const app = express()
const port = 5000
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRoute = require("./routes/user")
dotenv.config();



mongoose.connect(
    process.env.MONGO_URL
    ).then(()=>console.log("connessione riuscita")).catch((err)=> {console.log(err)})

app.get('/', (req, res) => res.send('Hello World!'))

app.use("/api/user", userRoute);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
