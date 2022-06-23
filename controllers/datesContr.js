const nowaData = (req,res) =>{
    res.json({"unix": new Date().getTime(), "utc": new Date().toUTCString()})
  }

const wyswietlacz = (req,res) => {
        let date_string = req.params.date;
        console.log(req.params)
        let odpowiedz = {}
       if (date_string.includes("-")) {
          odpowiedz["unix"] = new Date(date_string).getTime(); 
          odpowiedz["utc"]= new Date(date_string).toUTCString();
        } else if (!isNaN(date_string)){
          date_string = parseInt(date_string),
          odpowiedz["unix"] = new Date(date_string).getTime(); 
          odpowiedz["utc"]= new Date(date_string).toUTCString();
        } else {
          odpowiedz["unix"] = new Date(date_string).getTime()
          odpowiedz["utc"]= new Date(date_string).toUTCString()
        }
        if (!odpowiedz["unix"] || !odpowiedz["utc"]){
          odpowiedz = {error : "Invalid Date"}
        }
        res.json(odpowiedz)
}

module.exports = {nowaData, wyswietlacz}