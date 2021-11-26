
function elige() {
    let url = "https://raw.githubusercontent.com/DolyChe/mi_proyecto_web/master/data/api.json";
    fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        productos.innerHTML = data["postres"][numimagen]["name"];
        imagen.src = data["postres"][numimagen]["image"];
    }).catch(function (error) {
        console.log("ERROR: ", error);
    });

}

function cambiaimagen() {
    numimagen++;
    if (numimagen >= 32) {
        numimagen = 0
    }
    elige();
}

let numimagen = 0;
let productos = document.getElementById("productos");
let imagen = document.getElementById("imagen");
let boton = document.getElementById("btn");
boton.addEventListener("click", cambiaimagen);
elige();











