let ciudadesArray = [];
do {
    let ciudadesPrompt = prompt("Escribe nombre de ciudad");
    if (ciudadesPrompt == null || ciudadesPrompt == NaN) {
        
    } else {
        ciudadesArray.push(ciudadesPrompt)
    }
} while (confirm("Quieres continuar escribiendo?"));

function escritura(queEscribir) {
    document.write("<br>"+queEscribir);
};
escritura(ciudadesArray);
escritura(ciudadesArray.length);
escritura(ciudadesArray[0]);
escritura(ciudadesArray[2]);
escritura(ciudadesArray.length - 1);
ciudadesArray.push("Paris");
escritura(ciudadesArray[1]);
ciudadesArray[1] = "Barcelona";
escritura(ciudadesArray);