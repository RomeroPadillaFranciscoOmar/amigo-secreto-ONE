let amigos = [];

function agregarAmigo() {
  // Obtener el valor del input
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar que el campo no esté vacío
  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  let regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
  if (!regex.test(nombre)) {
    alert("El nombre solo puede contener letras y espacios.");
    return;
  }
  // Validar que el nombre solo contenga letras y espacios

  // Agregar el nombre al array
  amigos.push(nombre);
  console.log("Lista de amigos:", amigos);

  // Actualizar la lista en el HTML
  actualizarLista();

  // Limpiar el input después de agregar el nombre
  input.value = "";
}

function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista antes de actualizar

  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  // Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("Agrega al menos un amigo antes de sortear.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en la página
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>🎉 Amigo secreto: <strong>${amigoSorteado}</strong> 🎉</li>`;
  console.log("El amigo secreto es: " + amigoSorteado);
}
