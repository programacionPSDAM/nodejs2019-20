const dividir = (dividendo, divisor) => {
    setTimeout ( () => dividendo / divisor, 1000 )
}

console.log('inicio de programa')
console.log(dividir (20 , 3))
console.log(dividir (20 , 0))
console.log('Fin de programa')