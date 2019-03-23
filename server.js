const fs = require('fs')
const express = require("express")
const app = express();
const PORT = 80;

app
   .use(express.static("static"))
   .use(express.urlencoded({extended:false}))
   .post("/config", post_config)
   .listen(PORT, ()=>console.log("Listening on port " + PORT))

function post_config(req, res, next){
    fs.writeFile("test.json", JSON.stringify(req.body), function(err){
        if(err) {
            res.write("Error: " + err);
        }else{
            res.write("The file was saved!");
        }
        res.end();
      });
}