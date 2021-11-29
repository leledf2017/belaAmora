//Import Sequelize
const Sequelize = require('sequelize')

//Sequelize Instance + Config Database
const sequelize = new Sequelize('belaAmora','leledf2017','LE*le02326527',{
    host:'localhost',
    dialect:'mysql'
})

//Export Sequelize
module.exports = {
    Sequelize:Sequelize,
    sequelize:sequelize
}

