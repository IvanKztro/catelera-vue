const express = require("express");
const serverStatic = require("serve-static");
const path = require("path");
const history = require("connect-history-api-fallback");

const app = express();
app.use(history());

app.use('/',express.static(path.join(__dirname,'/dist')))

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
   console.log("ESCHUANDO PUERTO : ",  app.get("port"))
})