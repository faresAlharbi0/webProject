console.log("bbbb");
const express = require("express");
const app = express();
app.use("/",express.static("./html"))
app.use("/",express.static("./css"));
app.listen(4000, ()=>{
    console.log("running");

})