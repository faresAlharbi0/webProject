console.log("bbbb");
const express = require("express");
const app = express();
const{check, validationResult} = require("express-validator");
const { createConnection } = require("net");
let formValidate = getFormValidation();
app.use(express.urlencoded({extended:false}));
app.use("/",express.static("./website"));
app.post("/submitForm",formValidate,(request,response)=>{
    const errors = validationResult(request);
    if(!errors.isEmpty()){
        let msg = "we found errors in your code";
        response.send(msg);

    }
    else{
        const fname = request.body.fname;
        const lname = request.body.lname;
        const email = request.body.email;
        const message = request.body.message;
        addFormMessage(fname,lname,email,message);
        let msg = "your message were submited";
        response.send(msg);
    }
})
app.listen(4000, ()=>{
    console.log("running");

});
function getFormValidation(){
    return[
            check('fname').isLength({min:1, max:100}).withMessage('First name must be between 1 and 100 chars.')//length
            .isString().withMessage("First name must be a string")//type
            .matches('[A-Za-z]+').withMessage("First name must consist of letters only")//format
            .trim().escape(),
            check('lname').isLength({min:1, max:100}).withMessage('First name must be between 1 and 100 chars.')//length
            .isString().withMessage("First name must be a string")//type
            .matches('[A-Za-z]+').withMessage("First name must consist of letters only")//format
            .trim().escape(),
            check('message').isLength({min:1, max:250}).withMessage('First name must be between 1 and 250 chars.')//length
            .isString().withMessage("message name must be a string")//type
            .trim().escape(),
            check('email').isEmail().withMessage("Email must of format x@y.z")
            .trim().escape()
    ]
}
function addFormMessage(fname,lname,email,message){
    
    //connection
    const mysql = require("mysql2");
    let db = mysql.createConnection({
            host:'127.0.0.1',
            user:'root',
            password:'root',
            port:'3306',
            database:'form' 
    });

    db.connect(function(err){
        //SQL command
        let sql = "INSERT INTO form (fname, lname, email, message) VALUES ('"+fname+"', '"+lname+"', '"+email+"', '"+message+"')";

        //exeucte command
        db.query(sql, function(err,result){
            
            if(err) throw err;

            //if no errors
            console.log("1 record added");
        })
    })
}