//Inports App
const express = require('express')
const app = express()

let port = 3000

const bodyParser = require('body-parser')

const Product = require('./models/Product.js')
const Client = require('./models/Client.js')
//const Provider = require('./models/Provider.js')

app.listen(port,()=>{
    console.log(`Server active on port: ${port}`)
})

//Bodyparser Config
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Set Static Files
app.use(express.static('public'))
app.use('/styles',express.static(__dirname + 'public/styles'))
app.use('/scripts',express.static(__dirname + 'public/scripts'))
app.use('/medias/images',express.static(__dirname + 'public/medias/images'))

//set views - ejs
app.set('views','./views')
app.set('view engine','ejs')

//Routes App - Type Get
app.get('/home',(req,res)=>{
    res.render('index')
})

app.get('/register-product',(req,res)=>{
    res.render('register-product')
})

app.get('/register-client',(req,res)=>{
    res.render('register-client')
})

app.get('/register-provider',(req,res)=>{
    res.render('register-provider')
})

app.get('/about',(req,res)=>{
    res.render('about')
})

//Routes App - Type Post
    //Products
app.post('/data-product',(req,res)=>{
    Product.create({
        productCode:req.body.productCode,
        productFullDescription:req.body.productFullDescription,
        productShortDescription:req.body.productShortDescription,
        productCostPrice:req.body.productCostPrice,
        productSalePrice:req.body.productSalePrice
    }).then(()=>{
       res.render('sucess-register-product')
    }).catch((erro)=>{
        res.render('failure-register-product')
    })
})

//Clients
app.post('/data-client',(req,res)=>{
    Client.create({
        clientCode:req.body.clientCode,
        clientFirstName:req.body.clientFirstName,
        clientLastName:req.body.clientLastName,
        clientCpfCode:req.body.clientCpfCode,
        clientBirth:req.body.clientBirth,
        clientAdress:req.body.clientAdress,
        clientAdressNumber:req.body.clientAdressNumber,
        clientAdressNumberPlus:req.body.clientAdressNumberPlus,
        clientAdressNeighborhood:req.body.clientAdressNeighborhood,
        clientCity:req.body.clientCity,
        clientState:req.body.clientState,
        clientZipCode:req.body.clientZipCode
    }).then(()=>{
       res.render('sucess-register-client')
    }).catch((erro)=>{
        res.render('failure-register-client')
    })
})