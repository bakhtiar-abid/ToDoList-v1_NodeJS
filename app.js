
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = ["Buy Food", "Cook Food", "Eat Food"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
//    res.send("Hello");
 
   
var today = new Date();

var options = {
   weekday: "long",
   day: "numeric",
   month: "long",
   year: "numeric",
};

var day = today.toLocaleDateString("en-US", options);

res.render("list", { kindOfDay: day, newListItems: items });


app.post("/", function (req, res) {
   item =  req.body.newItem;

  items.push(item);
  res.redirect("/");
});

// var currentDay = today.getDay();

// var day = "";

// switch (currentDay) {
//    case 0:
//       day = "Sunday";
//       break;

//    case 1:
//       day = "Monday";
//       break;

//    case 2:
//       day = "Tuesday";
//       break;

//    case 3:
//       day = "Wednesday";
//       break;

//    case 4:
//       day = "Thursday";
//       break;

//    case 5:
//       day = "Friday";
//       break;

//    case 6:
//       day = "Saturday";
//       break;

//    default:
//       console.log("Error: current day is equal to: " + currentDay);
//       break;
// }



});




app.listen(3000, function () {
   console.log("Server started on port 3000.");
});


