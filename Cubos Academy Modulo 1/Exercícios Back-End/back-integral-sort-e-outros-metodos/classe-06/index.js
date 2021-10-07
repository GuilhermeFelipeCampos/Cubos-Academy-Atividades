const numeros = [0, 122, 4, 6, 7, 8, 44];

let numerosPares = numeros.every(numero => numero % 2 === 0)
numerosPares ?
    console.log("array válido")
    : console.log("array Inválido");