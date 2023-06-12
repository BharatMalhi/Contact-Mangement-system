const express = require("express");
const errorHandler = require("./Middleware/Error");
const dotenv = require("dotenv").config()
require("./bootstrap/index")
// connectDb();
const app = express();
// const port = 5000
const port = process.env.PORT || 5001; 
app.use(express.json())


app.use("/api/contact",require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Server is running ${port}`)
})
