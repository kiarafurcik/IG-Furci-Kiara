let tituloPrincipal = document.querySelector("h1")
tituloPrincipal.addEventListener("click", function() {
    tituloPrincipal.style.color = "#c10e0e"
});

let tituloSecundario = document.querySelector("h2")
tituloSecundario.addEventListener("click", function() {
    this.style.color = "#c10e0e"
});

let todosLosParrafos = document.querySelectorAll("p");
todosLosParrafos.forEach(function(unParrafo) {
    unParrafo.addEventListener("click", function() {
        unParrafo.style.color = "red";
    });

});

let listilla = document.querySelector("ul")
listilla.addEventListener("click", function() {
    listilla.style.color = "#c10e0e"
})

let imagen = document.querySelector("img")
imagen.addEventListener("click", function() {
    imagen.style.display = "none"
})
