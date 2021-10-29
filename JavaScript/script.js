var botonp = document.getElementById("botonp");
var boton1 = document.getElementById("btn1");
var boton2 = document.getElementById("btn2");



// BOTON PPP CAMBIA COLOR CUANDO ESTA ENCIMA
botonp.addEventListener('mouseenter', function() {
    botonp.style.color = 'white';
    botonp.style.backgroundColor = 'rgb(76, 211, 227)';
})

// BOTON PPP VUELVE AL COLOR CUANDO SALE
botonp.addEventListener('mouseleave', function() {
    botonp.style.color =
    'rgb(76, 211, 227)';
    botonp.style.backgroundColor = 'white';
})



// BOTON 1
// BOTON DE GESTION CIUDADANOS CAMBIA COLOR
boton1.addEventListener('mouseenter', function() {
    boton1.style.color = 'white';
    boton1.style.backgroundColor = 'rgb(228, 166, 29)';
})

// BOTON DE GESTION CIUDADANOS VUELVE AL COLOR ORIGINAL
boton1.addEventListener('mouseleave', function() {
    boton1.style.color = 'rgb(228, 166, 29)';
    boton1.style.backgroundColor = 'white';
})



// BOTON 2
// BOTON DE GESTION EMPRESAS CAMBIA COLOR
boton2.addEventListener('mouseenter', function() {
    boton2.style.color = 'white';
    boton2.style.backgroundColor = 'rgb(228, 166, 29)';
})

// BOTON DE GESTION EMPRESAS VUELVE COLOR
boton2.addEventListener('mouseleave', function() {
    boton2.style.color = 'rgb(228, 166, 29)';
    boton2.style.backgroundColor = 'white';
})