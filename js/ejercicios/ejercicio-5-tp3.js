let frase = prompt("Escriba una frase");

function checkType(centence) {
    centence = String(centence).trim(); // String hace manipulable la "centence" y luego trim quita los espacios en blanco

    //Valida si los caracteres estan en mayusculas, minusculas o los 2
    // para entender la comprobacion ir a https://www.w3schools.com/jsref/jsref_obj_regexp.asp
    const regxs = {
        "lower": /^[a-z0-9 ]+$/,
        "upper": /^[A-Z0-9 ]+$/,
        "upperLower": /^[A-Za-z0-9 ]+$/
    }
    // ^[] comprueba que la cadena coincida con los parametros dentro de corchetes.
    //[]+ comprueba que la cadena coincida con al menos uno de los parametros dentro de corchetes.

    //Test comprueba si el elemento puesto como parametro cumple con las condiciones puestas por la validacion
    if (regxs.lower.test(centence)) return '0';
    if (regxs.upper.test(centence)) return '1';
    if (regxs.upperLower.test(centence)) return '2';
    return -1;
}

if (checkType(frase) == '0') {
    document.write("La frase esta en minusculas")
};
if (checkType(frase) == '1'){
    document.write("La frase esta en mayusculas")
};
if (checkType(frase) == '2') {
    document.write("La frase tiene mayusculas y minusculas")
};