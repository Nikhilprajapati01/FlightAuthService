const express = require("express");

const {Port} = require("./config/Server_config.js")
const Userrepository = require('./Repository/User_repository.js')


const app = express();
const bodyparser = require('body-parser')

const v1routes = require('./Routes/index.js')

const PrePareAndServer = ()=>{
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))

    app.use('/api', v1routes);




    
        app.listen(Port , async ()=>{
            console.log(`server start in ${Port}`);
            // const repo = new Userrepository();
            // const user = await repo.getbyid(1)
            // console.log(user);
            
            
        })
   

  
}

PrePareAndServer();