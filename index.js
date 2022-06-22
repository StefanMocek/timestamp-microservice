const express = require('express');
const app = express();

const dataRoute = require("./routes/dates")

const cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));

app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.use("/api", dataRoute)


var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


// app.get("/api", (req,res)=>{
//   res.json({"unix": new Date().getTime(), "utc": new Date().toUTCString()})
// })

// app.get("/api/:date", (req,res)=>{
//   let date_string = req.params.date;
//   console.log(req.params)
//   let odpowiedz = {}
//  if (date_string.includes("-")) {
//     odpowiedz["unix"] = new Date(date_string).getTime(); 
//     odpowiedz["utc"]= new Date(date_string).toUTCString();
//   } else if (!isNaN(date_string)){
//     date_string = parseInt(date_string),
//     odpowiedz["unix"] = new Date(date_string).getTime(); 
//     odpowiedz["utc"]= new Date(date_string).toUTCString();
//   } else {
//     odpowiedz["unix"] = new Date(date_string).getTime()
//     odpowiedz["utc"]= new Date(date_string).toUTCString()
//   }
//   if (!odpowiedz["unix"] || !odpowiedz["utc"]){
//     odpowiedz = {error : "Invalid Date"}
//   }
//   res.json(odpowiedz)
// })