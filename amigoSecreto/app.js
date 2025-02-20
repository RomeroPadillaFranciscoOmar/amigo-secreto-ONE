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

  // Agregar el nombre al array
  amigos.push(nombre);

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
