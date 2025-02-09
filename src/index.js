const express = require("express");

const {Port} = require("./config/Server_config.js")
const Userrepository = require('./Repository/User_repository.js')
const db = require("./models/index.js")
const {User , Role} = require('./models/index.js')


const app = express();
const bodyparser = require('body-parser')

const v1routes = require('./Routes/index.js')

const PrePareAndServer = ()=>{
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))

    app.use('/api', v1routes);




    
        app.listen(Port , async ()=>{
            console.log(`server start in ${Port}`);

            // if(process.env.DB_SYNC){
            //     db.sequelize.sync({alert: true})
            // }

            // const u1 =await User.findByPk(1);
            // const r1 =await Role.findByPk(1);
            // u1.addRole(r1)
            // const repo = new Userrepository();
            // const user = await repo.getbyid(1)
            // console.log(user);
            
            
        })
   

  
}

PrePareAndServer();