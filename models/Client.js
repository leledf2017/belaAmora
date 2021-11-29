//Import Database File (Sequelize)
const dataBase = require('./dataBase.js')

//Creating Tables - Client
const Client = dataBase.sequelize.define('clients',{
    clientCode:{
        type:dataBase.Sequelize.STRING
    },
    clientFirstName:{
        type:dataBase.Sequelize.STRING
    },
    clientLastName:{
        type:dataBase.Sequelize.STRING
    },
    clientCpfCode:{
        type:dataBase.Sequelize.STRING
    },
    clientBirth:{
        type:dataBase.Sequelize.DATE
    },
    clientAdress:{
        type:dataBase.Sequelize.TEXT
    },
    clientAdressNumber:{
        type:dataBase.Sequelize.STRING
    },
    clientAdressNumberPlus:{
        type:dataBase.Sequelize.STRING
    },
    clientAdressNeighborhood:{
        type:dataBase.Sequelize.STRING
    },
    clientCity:{
        type:dataBase.Sequelize.STRING
    },
    clientState:{
        type:dataBase.Sequelize.STRING
    },
    clientZipCode:{
        type:dataBase.Sequelize.STRING
    }

})

//Synchronizing Table to DB
//Client.sync({force:true})

//Export Table
module.exports = Client