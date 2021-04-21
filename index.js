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
console.log(nombre.value);
let cadena = `mailto:consultar@ciudadcred.com?Subject=Desde%20Pagina%20web&body=Nombre%20${nombre.value}
              %20DNI%20${dni.value}
              %20Telefono%20${telefono.value}
              %20Email:%20${email.value}
              %20Genero%20${genero.value}
              %20Cuanto:%20${cuanto.value}
              %20Cuotas:%20${cuotas.value}`

window.open(cadena);        

});