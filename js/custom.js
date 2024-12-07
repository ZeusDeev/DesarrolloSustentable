// Función unificada para abrir y cerrar el menú
function openNav() {
    const menu = document.getElementById("myNav");
    const button = document.querySelector(".custom_menu-btn");

    // Alternar la clase 'menu_width' y el estilo del botón
    menu.classList.toggle("menu_width");
    button.classList.toggle("menu_btn-style");
}

// Función para manejar el acordeón
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});

// Mostrar el año actual
function displayYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.querySelector("#displayDate").innerHTML = currentYear;
}
displayYear();

// Inicialización del mapa de Google
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// Funciones para abrir y cerrar el menú (alternativa con altura)
function openNavHeight() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

// Función para calcular la huella de carbono
function calcularHuellaCarbono(energia, transporte, materiales, residuos, agua) {
    return energia * 0.5 + transporte * 0.2 + materiales * 0.3 + residuos * 0.1 + agua * 0.05;
}

// Mostrar mensaje de respuesta de huella de carbono
function showResponseMessage(huellaTotal) {
    const messageElement = document.getElementById("responseMessage");
    messageElement.style.display = "block";
    document.getElementById("huellaResult").textContent = huellaTotal.toFixed(2);
}

// Manejar el formulario de la calculadora de huella de carbono
document.getElementById("carbonForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    const energia = parseFloat(document.getElementById("energia").value) || 0;
    const transporte = parseFloat(document.getElementById("km_transporte").value) || 0;
    const materiales = parseFloat(document.getElementById("materiales").value) || 0;
    const residuos = parseFloat(document.getElementById("residuos").value) || 0;
    const agua = parseFloat(document.getElementById("agua").value) || 0;

    // Calcular la huella de carbono
    const huellaTotal = calcularHuellaCarbono(energia, transporte, materiales, residuos, agua);

    // Mostrar el resultado
    showResponseMessage(huellaTotal);
});

// Generar PDF con los resultados de la calculadora
document.getElementById("generatePdfBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Obtener los valores del formulario
    const energia = parseFloat(document.getElementById("energia").value) || 0;
    const transporte = parseFloat(document.getElementById("km_transporte").value) || 0;
    const materiales = parseFloat(document.getElementById("materiales").value) || 0;
    const residuos = parseFloat(document.getElementById("residuos").value) || 0;
    const agua = parseFloat(document.getElementById("agua").value) || 0;

    // Calcular la huella de carbono
    const huellaTotal = calcularHuellaCarbono(energia, transporte, materiales, residuos, agua);

    // Configurar el contenido del PDF
    let yPosition = 20; // Posición inicial
    const lineHeight = 10; // Altura entre líneas

    doc.text("Reporte de Huella de Carbono", 20, yPosition);
    yPosition += lineHeight;

    doc.text("Consumo de Energía: " + energia + " kWh", 20, yPosition);
    yPosition += lineHeight;
    doc.text("Distancia en Transporte: " + transporte + " km", 20, yPosition);
    yPosition += lineHeight;
    doc.text("Materiales y Productos: " + materiales + " kg", 20, yPosition);
    yPosition += lineHeight;
    doc.text("Gestión de Residuos: " + residuos + " kg", 20, yPosition);
    yPosition += lineHeight;
    doc.text("Uso del Agua: " + agua + " m³", 20, yPosition);
    yPosition += lineHeight;

    doc.text("Huella de Carbono Total: " + huellaTotal.toFixed(2) + " unidades", 20, yPosition);

    // Guardar el PDF
    doc.save("reporte_huella_carbono.pdf");
});

// Función para manejar el acordeón
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});
