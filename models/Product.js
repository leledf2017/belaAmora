//Import Database File (Sequelize)
const dataBase = require('./dataBase.js')

//Creating Tables - Product
const Product = dataBase.sequelize.define('products',{
    productCode:{
        type:dataBase.Sequelize.STRING
    },
    productFullDescription:{
        type:dataBase.Sequelize.TEXT
    },
    productShortDescription:{
        type:dataBase.Sequelize.STRING
    },
    productCostPrice:{
        type:dataBase.Sequelize.FLOAT
    },
    productSalePrice:{
        type:dataBase.Sequelize.FLOAT
    }

})

//Synchronizing Table to DB
//Product.sync({force:true})

//Export Table
module.exports = Product



