const express=require('express')
const app=express()
const bodyparsar=require('body-parser')
const port=process.env.PORT || 5000;
const mongan=require('morgan')
const {sequelize}=require('./connection')

app.use(mongan('tiny'))
app.use(bodyparsar.urlencoded({extended:false}))
app.use(express.json())
app.use('/',require('./router'))





sequelize.sync({force:true}).then(()=>{
    app.listen(port,()=>{
        console.log('app is running on 5000')
    })
}).catch((er)=>{
console.log('not connected servver',er)
})
 