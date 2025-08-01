// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Función para agregar un amigo a la lista
 * Se ejecuta cuando el usuario hace clic en "Añadir"
 */
function agregarAmigo() {
    // Obtener el elemento input y su valor
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el nombre no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    
    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya está en la lista.');
        inputAmigo.value = '';
        return;
    }
    
    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    console.log (amigos);
    
    // Limpiar el input
    inputAmigo.value = '';
    
    // Actualizar la lista visual
    actualizarListaAmigos();
    
    // Limpiar cualquier resultado anterior
    limpiarResultado();
}

/**
 * Función para actualizar la lista visual de amigos
 * Muestra todos los nombres agregados en el DOM
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigos.innerHTML = '';
    
    // Crear un elemento <li> para cada amigo
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
    
    // Asegurar que la lista sea visible cuando se agrega un amigo
    mostrarListaAmigos();
}

/**
 * Función para realizar el sorteo del amigo secreto
 * Se ejecuta cuando el usuario hace clic en "Sortear amigo"
 */
function sortearAmigo() {
    // Validar que haya al menos 2 amigos para sortear
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }
    
    // Ocultar la lista de amigos para mantener el misterio
    ocultarListaAmigos();
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSorteado);
}

/**
 * Función para mostrar el resultado del sorteo
 * @param {string} amigoSorteado - El nombre del amigo que fue sorteado
 */
function mostrarResultado(amigoSorteado) {
    const resultado = document.getElementById('resultado');
    
    // Limpiar resultado anterior
    resultado.innerHTML = '';
    
    // Crear elemento para mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `El amigo secreto sorteado es: ${amigoSorteado}`;
    console.log(amigoSorteado);
    
    resultado.appendChild(li);
}

/**
 * Función para limpiar el resultado del sorteo
 * Se usa cuando se agrega un nuevo amigo
 */
function limpiarResultado() {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
}

/**
 * Función para ocultar la lista de amigos
 * Se ejecuta durante el sorteo para mantener el misterio
 */
function ocultarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'none';
}

/**
 * Función para mostrar la lista de amigos
 * Se ejecuta cuando se agrega un nuevo amigo
 */
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.style.display = 'block';
}

/**
 * Función adicional para permitir agregar nombres con la tecla Enter
 * Mejora la experiencia del usuario
 */
document.addEventListener('DOMContentLoaded', function() {
    const inputAmigo = document.getElementById('amigo');
    
    // Agregar evento para la tecla Enter
    inputAmigo.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    
    // Enfocar el input al cargar la página
    inputAmigo.focus();
});

// Función opcional para limpiar toda la lista (puedes agregarla como botón extra)
function limpiarLista() {
    amigos = [];
    actualizarListaAmigos();
    limpiarResultado();
    // Mostrar la lista nuevamente para que el usuario pueda agregar nombres
    mostrarListaAmigos();
}