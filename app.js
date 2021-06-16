
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

// creating database for TodoList
mongoose.connect("mongodb://localhost:27017/todolistDB", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});


const itemsSchema = new mongoose.Schema({
   name: String
  
});

const Item = mongoose.model("Item", itemsSchema);

const item1 = new Item({
   name: "Welcome to your todolist!",

});

const item2 = new Item({
   name: "Hit the + button to add a new item",
});

const item3 = new Item({
   name: "<-- Hit this to delete this item from your list as well",
});

//putting those items in an array

const defaultItems = [item1, item2, item3];

Item.insertMany(defaultItems, function (err) {
   if (err) {
      console.log(err);
   } else {
      console.log("Successfully saved all the fruiits to fruitsDb");
   }
});

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", function (req, res) {
  
        let day = date.getDate();

   res.render("list", { listTitle: day, newListItems: defaultItems });

});  



   app.post("/", function (req, res) {

//  console.log(req.body);


      const item = req.body.newItem;
      if (req.body.list === "Work") {

         workItems.push(item);
         res.redirect("/work");

      } else {
         items.push(item);
         res.redirect("/");
      }

   });

app.get("/work", function(req, res){

   res.render("list", { listTitle: "Work List", newListItems: workItems });

});

app.get("/about", function(req,res){

   res.render("about");

});


app.listen(3000, function () {
   console.log("Server started on port 3000.");
});




// app.post("/work", function(req,res){

//    let item = req.body.newItem;
//    workItems.push(item);
//    res.redirect("/work");
// });





var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
   },
});

var mailOptions = {
   from: "youremail@gmail.com",
   to: "myfriend@yahoo.com",
   subject: "Sending Email using Node.js",
   text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
   if (error) {
      console.log(error);
   } else {
      console.log("Email sent: " + info.response);
   }
});

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
   },
});

var mailOptions = {
   from: "youremail@gmail.com",
   to: "myfriend@yahoo.com",
   subject: "Sending Email using Node.js",
   text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
   if (error) {
      console.log(error);
   } else {
      console.log("Email sent: " + info.response);
   }
});

var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
   },
});

var mailOptions = {
   from: "youremail@gmail.com",
   to: "myfriend@yahoo.com",
   subject: "Sending Email using Node.js",
   text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
   if (error) {
      console.log(error);
   } else {
      console.log("Email sent: " + info.response);
   }
});
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: "youremail@gmail.com",
      pass: "yourpassword",
   },
});

var mailOptions = {
   from: "youremail@gmail.com",
   to: "myfriend@yahoo.com",
   subject: "Sending Email using Node.js",
   text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
   if (error) {
      console.log(error);
   } else {
      console.log("Email sent: " + info.response);
   }
});
