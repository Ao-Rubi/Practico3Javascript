let lado1 = parseInt(prompt("Escriba el largo del rectangulo (Valor numerico)"));
let lado2 = parseInt(prompt("Escriba el ancho del rectangulo (Valor numerico)"));

let perimetro = (largo, ancho) => {

    let proceso = 2*(largo + ancho);

    return document.write(`El perimetro del rectangulo es de ${proceso}`);
};

perimetro(lado1, lado2);