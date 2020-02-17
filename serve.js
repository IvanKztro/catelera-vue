const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");

const app = express();

app.use("/", serverStatic(path.join(__dirname, '/dist')));

//const port = process.env.PORT || 8080
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
   console.log("ESCHUANDO PUERTO: ",  app.get("port"))
})