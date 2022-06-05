let frase = prompt("Escriba una frase");

function checkType(centence) {
    centence = String(centence).trim();
    const regxs = {
        "lower": /^[a-z0-9 ]+$/,
        "upper": /^[A-Z0-9 ]+$/,
        "upperLower": /^[A-Za-z0-9 ]+$/
    }

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