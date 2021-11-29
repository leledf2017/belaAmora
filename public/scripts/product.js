
//Select Buttons
let btnCalcPrice = document.querySelector('#btn-price-generator')
let btnCodeGerator = document.querySelector('#btn-code-generator')
//let btnCodeClientGerator = document.querySelector('#btn-code-client-generator')

//Select Price Inputs
let productCostPrice = document.querySelector('#product-cost-price')
let markup = document.querySelector('#markup')
let productSalePrice = document.querySelector('#product-sale-price')

//Select Code Input
let productCode = document.querySelector('#product-code')
//let clientCode = document.querySelector('#client-code')

//Price Calculation - Event
btnCalcPrice.addEventListener('click',()=>{
    let calcPrice = parseFloat(productCostPrice.value) * parseFloat(markup.value)
    productSalePrice.value = calcPrice.toFixed(2)

})

//Code Generator
btnCodeGerator.addEventListener('click',()=>{
    productCode.value = Math.floor(Math.random() * 65536)

})

/*btnCodeClientGerator.addEventListener('click',()=>{
    clientCode.value = Math.floor(Math.random() * 65536)
    console.log('teste')
})*/