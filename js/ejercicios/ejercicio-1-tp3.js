let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let impresion = () => {
    document.write("<ul>");
    for (let posicion = 0; posicion < meses.length; posicion++) {
        document.write(`<li>
            ${meses[posicion]}
        </li>`)
    };
    document.write("</ul>");
};

impresion();