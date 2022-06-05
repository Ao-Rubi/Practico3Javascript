let detector = (numero) => {
    if (numero%2 == 0) {
        document.write("El numero que pusiste es par")
    }else if (numero%2 !== 0) {
        document.write("El numero que pusiste es impar")
    }
}

detector(parseInt(prompt("ingrese un numero")))