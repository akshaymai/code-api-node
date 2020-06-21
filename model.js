const Sequelize=require('sequelize')
const {sequelize}=require('./connection')
const User=sequelize.define('user',{
    userId:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull:false
    },
    username:{
    type:Sequelize.STRING,
    unique:true,
    allowNull:false
    },
    name:{
    type:Sequelize.STRING,
    allowNull:false
    }

})
module.exports={User};