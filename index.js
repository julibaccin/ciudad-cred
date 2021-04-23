const form = document.getElementById('form');
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
const nombre = document.getElementById('nombre')
const dni = document.getElementById('dni')
const telefono = document.getElementById('telefono')
const cuanto = document.getElementById('cuanto')
const cuotas = document.getElementById('cuotas')

form.addEventListener('submit', (e)=>{

e.preventDefault()

let cadena = `mailto:consultas@ciudadcred.com?Subject=Desde%20Pagina%20web&body=
              Nombre:%20${nombre.value}%0A
              DNI:%20${dni.value}%0A
              Telefono:%20${telefono.value}%0A
              Cuanto:%20${cuanto.value}%0A
              Cuotas:%20${cuotas.value}`

myModal.hide();
window.open(cadena,'_self')

});