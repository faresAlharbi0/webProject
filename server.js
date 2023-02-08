console.log("bbbb");
const express = require("express");
const app = express();
app.use("/",express.static("./website"));
app.listen(4000, ()=>{
    console.log("running");

});