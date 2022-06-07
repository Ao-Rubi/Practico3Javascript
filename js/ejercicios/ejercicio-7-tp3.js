let numero = parseInt(prompt("Escriba numero para la tabla de multiplicar"))

document.write(`<table> <tbody>`)
for (let indiceFila = 1; indiceFila <= 10; indiceFila++) {
    //Dibujo las filas
    document.write("<tr>")

        document.write(`<td>${indiceFila*numero}</td>`)
    document.write("</tr>")
    
}
document.write(`</table> </tbody>`)