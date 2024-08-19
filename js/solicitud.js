// script.js

document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
// script para menu despleglable de clase de documento

document.addEventListener("DOMContentLoaded", function() {
    const elementoSelecionado = document.getElementById('proceso-seleccionado');
    const botonEnviar = document.getElementById('boton-enviar');
    const resultadoDiv = document.getElementById('resultado');

    botonEnviar.addEventListener('click', function() {
        const selectedValue = elementoSelecionado.value;

        if (selectedValue) {
            resultadoDiv.textContent = `Has seleccionado: ${selectedValue}`;
        } else {
            resultadoDiv.textContent = 'Por favor, seleccione un proceso.';
        }
    });
});

// script de seleccion de fecha
document.addEventListener("DOMContentLoaded", function() {
    const datePicker = document.getElementById('date-picker');
    const submitButton = document.getElementById('submit-button');
    const outputDiv = document.getElementById('output');

    submitButton.addEventListener('click', function() {
        const selectedDate = datePicker.value;

        if (selectedDate) {
            outputDiv.textContent = `Has seleccionado: ${selectedDate}`;
        } else {
            outputDiv.textContent = 'Por favor, seleccione una fecha.';
        }
    });
});

function saveText() {
    const editableDiv = document.getElementById('editableDiv');
    const text = editableDiv.innerHTML;
    
    // Muestra el contenido guardado en el div con id "result"
    document.getElementById('result').innerHTML = `
        <h2>Información Guardada:</h2>
        <p>${text}</p>
    `;
}

