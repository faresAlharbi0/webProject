console.log("bbbb");
const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use("/",express.static("./website"));
app.post("/submitForm",(request,response)=>{
    const fname = request.body.fname;
    const lname = request.body.lname;
    const email = request.body.email;
    const message = request.body.message;
    let msg = "<h1>"+fname+"</h1>" + "<h1>"+lname+"</h1>"+"<h1>"+email+"</h1>" + "<h1>"+message+"</h1>";
    response.send(msg);
})
app.listen(4000, ()=>{
    console.log("running");

});