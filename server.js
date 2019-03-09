const fs = require('fs')
const express = require("express")
const app = express();

app
   .use(express.static("static"))
   .use(express.urlencoded({extended:false}))
   .post("/config", post_config)
   .listen(80, ()=>console.log("Listening on port " + 80))

function post_config(req, res, next){
    fs.writeFile("test.txt", req.body.data, function(err){
        if(err) {
	    res.write("Error: " + err);
        }else{
	    res.write("The file was saved!");
        }
        res.end();
      });
}
