let nombresAmigos = []; //Lista de amigos
console.log(nombresAmigos)

function agregarAmigo () {

    const NombreRecibido = document.getElementById("nuevonombreamigo");

    const nombre = NombreRecibido.value.trim();
//Crear función de guardado
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    } //Validar si se introdujo información
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
} //Mostrar lista de amigos


function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }// Sortear un amigo secreto

    const indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    const amigoSecreto = nombresAmigos[indiceAleatorio];
    // Elegir un índice aleatorio

   
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

} // Mostrar el resultado en la lista de resultados
