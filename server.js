console.log("bbbb");
const express = require("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use("/",express.static("./website"));
app.post("/login",(request,response)=>{
    const email = request.body.email;
    const passward = request.body.password;
    let msg = "<h1>"+email+"</h1>" + "<h1>"+passward+"</h1>";
    response.send(msg);
})
app.listen(4000, ()=>{
    console.log("running");

});