const {Sequelize} = require('sequelize');


const sequelize = new Sequelize('klftcrhk', 'klftcrhk', 'bCooJNNyIIuTfawSSYjEIR8y7QvLsem2', {
    host:'balarama.db.elephantsql.com',
    dialect:'postgres'
});

sequelize.authenticate().then(()=>{
    console.log('Connection has been established successfully.');
}).catch((err)=>{
    console.error('Unable to connect to the database:', err);
})


module.exports={sequelize}