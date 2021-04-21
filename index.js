const form = document.getElementById('form');
const nombre = document.getElementById('nombre')
const dni = document.getElementById('dni')
const telefono = document.getElementById('telefono')
const email = document.getElementById('email')
const genero = document.getElementById('genero')
const cuanto = document.getElementById('cuanto')
const cuotas = document.getElementById('cuotas')

form.addEventListener('submit', (e)=>{

e.preventDefault()

let cadena = `mailto:consultar@ciudadcred.com?Subject=Desde%20Pagina%20web&body=Nombre%20${nombre}`

window.open(cadena, "_self");        

});