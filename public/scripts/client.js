
//Select Buttons
let btnCodeClientGerator = document.querySelector('#btn-code-client-generator')

//Select Code Input
let clientCode = document.querySelector('#client-code')

//Code Generator
btnCodeClientGerator.addEventListener('click',()=>{
    clientCode.value = Math.floor(Math.random() * 65536)
})