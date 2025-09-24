// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresAmigos = [];
console.log(nombresAmigos)

function agregarAmigo () {

    const NombreRecibido = document.getElementById("nuevonombreamigo");

    const nombre = NombreRecibido.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }
    nombresAmigos.push(nombre);

    mostrarLista();

    NombreRecibido.value = "";
}
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");

    lista.innerHTML = ""; 

    nombresAmigos.forEach((nombresAmigos, index) => {
        const li = document.createElement("li"); 

        li.textContent = nombresAmigos;       

        lista.appendChild(li);                   
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Elegir un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSecreto = nombresAmigos[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}