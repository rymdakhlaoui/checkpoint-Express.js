// 1 reqquire express
const express = require('express');

// 2 create an instance of express
const app = express();

const path = require("path");

// 3 middleware body parser
app.use(express.json());
// 4 create the port
const port= 5000
// create a server
app.listen(port,(err)=>{
    err?console.log(err)
    :console.log(`the server is running at http://127.0.0.1:${port}`)  
});


// require the pug 
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); 


const checkDate = require("./middlewares/checkDate");

// use the middleware
app.use(checkDate);

//6 define a route
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/contact", (req, res) => {
  res.render("contact");
});

app.get("/services", (req, res) => {
  res.render("services");
});