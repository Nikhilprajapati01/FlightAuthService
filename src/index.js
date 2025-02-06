const express = require("express");

const {Port} = require("./config/Server_config.js")

const app = express();

const PrePareAndServer = ()=>{

    try {
        app.listen(Port ,()=>{
            console.log(`server start in ${Port}`);
            
        })
    } catch (error) {
        console.log(" error in index file ", error);
        
    }

  
}

PrePareAndServer();