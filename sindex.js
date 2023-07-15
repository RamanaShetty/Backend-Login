const express = require("express")
const register = express()
const routes = require('./routs/routes')

register.use(express.json())

register.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

register.use("/api/regiInsert",routes)

register.use("/api/loginCheck",routes)

register.listen(3000,()=>{
    console.log("Server is listening on port 3000...")
})